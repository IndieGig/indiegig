import { gigs } from "@/server/db/schema";
import { createGigSchema } from "../schema/user";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
	getUser: protectedProcedure.query(async ({ ctx }) => {
		const user = await ctx.db.query.users.findFirst({
			where: (user, { eq }) => eq(user.clerkId, ctx.userId),
		});

		return user;
	}),

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

	myGigs: protectedProcedure.query(async ({ ctx }) => {
		const user = await ctx.db.query.users.findFirst({
			where: (user, { eq }) => eq(user.clerkId, ctx.userId),
		});

		if (!user) {
			throw new Error("User not found");
		}

		const gigs = await ctx.db.query.gigs.findMany({
			where: (gigs, { eq }) => eq(gigs.userId, user.id),
		});

		return gigs;
	}),
});
