import { getGigByIdSchema, getGigsSchema } from "../schema/gigs";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const gigsRouter = createTRPCRouter({
	getGigs: protectedProcedure
		.input(getGigsSchema)
		.query(async ({ ctx, input }) => {
			const gigs = await ctx.db.query.gigs.findMany({
				where: (gigs, { eq, and }) =>
					and(input.category ? eq(gigs.category, input.category) : undefined),
				limit: input.limit ?? 10,
				offset: input.cursor ?? 0,
				orderBy: (gigs, { desc }) => [desc(gigs.createdAt)],
				with: {
					user: {
						columns: {
							username: true,
							imageUrl: true,
						},
					},
				},
			});

			return gigs;
		}),

	getGigById: protectedProcedure
		.input(getGigByIdSchema)
		.query(async ({ ctx, input }) => {
			const gig = await ctx.db.query.gigs.findFirst({
				where: (gigs, { eq }) => eq(gigs.id, input.id),
				with: {
					user: {
						columns: {
							username: true,
							imageUrl: true,
						},
					},
				},
			});

			return gig;
		}),
});
