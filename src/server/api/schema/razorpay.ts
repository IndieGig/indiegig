import { z } from "zod";

export const createOrderSchema = z.object({
	amount: z.number(),
});
