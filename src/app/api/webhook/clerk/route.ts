import { env } from "@/env";
import { db } from "@/server/db";
import { users } from "@/server/db/schema";
import { WebhookEvent } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { Webhook } from "svix";

export async function POST(req: Request) {
	const headerPayload = headers();
	const svix_id = headerPayload.get("svix-id");
	const svix_timestamp = headerPayload.get("svix-timestamp");
	const svix_signature = headerPayload.get("svix-signature");

	if (
		env.NODE_ENV === "production" &&
		(!svix_id || !svix_timestamp || !svix_signature)
	) {
		return new Response("Error occured -- no svix headers", {
			status: 400,
		});
	}

	const payload = await req.json();
	const body = JSON.stringify(payload);

	let evt: WebhookEvent;
	if (env.NODE_ENV === "production") {
		const wh = new Webhook(env.CLERK_WEBHOOK_SECRET!);

		evt = wh.verify(body, {
			"svix-id": svix_id!,
			"svix-timestamp": svix_timestamp!,
			"svix-signature": svix_signature!,
		}) as WebhookEvent;
	} else {
		evt = payload as WebhookEvent;
	}

	const eventType = evt.type;

	try {
		switch (eventType) {
			case "user.created":
				await db.insert(users).values({
					clerkId: evt.data.id,
				});
				break;

			case "user.deleted":
				if (evt.data.id) {
					await db.delete(users).where(eq(users.clerkId, evt.data.id));
				}
				break;

			default:
				console.log(`[Clerk] Unhandled event type: ${eventType}`);
				break;
		}

		return new Response("", { status: 200 });
	} catch (error) {
		console.error("[Clerk] Error occured", error);

		return new Response("Error occured", {
			status: 500,
		});
	}
}
