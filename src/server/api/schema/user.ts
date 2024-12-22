import { z } from "zod";

import { categories } from "@/lib/category";

export const createGigSchema = z.object({
	title: z
		.string()
		.min(12, "Title must be at least 12 characters")
		.max(100, "Title must be at most 100 characters"),
	description: z
		.string()
		.min(100, "Description must be at least 100 characters")
		.max(1000, "Description must be at most 1000 characters"),
	price: z
		.number()
		.min(1, "Price must be at least 1 USD")
		.max(10000, "Price must be at most 10000 USD"),
	category: z
		.string()
		.refine((value) => categories.some((category) => category.id === value), {
			message: "Invalid category",
		}),
	imageUrl: z.string().url("Invalid image URL"),
});
