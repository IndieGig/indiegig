import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";
import { gigsRouter } from "./routers/gigs";
import { razorpayRouter } from "./routers/razorpay";
import { userRouter } from "./routers/user";

export const appRouter = createTRPCRouter({
	user: userRouter,
	gigs: gigsRouter,
	razorpay: razorpayRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
