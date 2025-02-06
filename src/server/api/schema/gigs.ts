import { z } from "zod";

import { categories } from "@/lib/category";

export const getGigsSchema = z.object({
	category: z
		.string()
		.refine((value) => categories.some((category) => category.id === value), {
			message: "Invalid category",
		})
		.optional(),
	limit: z.number().optional().default(25),
	cursor: z.number().optional(),
});

export const getGigByIdSchema = z.object({
	id: z.number(),
});
