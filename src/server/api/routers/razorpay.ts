import Razorpay from "razorpay";

import { env } from "@/env";
import { createOrderSchema } from "../schema/razorpay";
import { createTRPCRouter, protectedProcedure } from "../trpc";

const razorpayInstance = new Razorpay({
	key_id: env.RAZORPAY_KEY,
	key_secret: env.RAZORPAY_SECRET,
});

export const razorpayRouter = createTRPCRouter({
	createOrder: protectedProcedure
		.input(createOrderSchema)
		.query(async ({ ctx, input }) => {
			const order = await razorpayInstance.orders.create({
				amount: input.amount,
				currency: "INR",
				payment_capture: true,
			});

			return order;
		}),
});
