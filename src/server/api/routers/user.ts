import { gigs } from "@/server/db/schema";
import { createGigSchema } from "../schema/user";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
	createGig: protectedProcedure
		.input(createGigSchema)
		.mutation(async ({ ctx, input }) => {
			const user = await ctx.db.query.users.findFirst({
				where: (user, { eq }) => eq(user.clerkId, ctx.userId),
			});

			if (!user) {
				throw new Error("User not found");
			}

			const gig = await ctx.db.insert(gigs).values({
				title: input.title,
				description: input.description,
				price: input.price,
				category: input.category,
				imageUrl: input.imageUrl,
				userId: user.id,
			});

			return gig;
		}),
});
