import { relations, sql } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";
import { createTable } from "./_table";
import { gigs } from "./gig";

export const users = createTable("users", {
	id: integer("id").primaryKey(),
	clerkId: text("clerkId").notNull(),

	email: text("email").notNull(),
	username: text("username").notNull(),
	firstName: text("first_name").notNull(),
	lastName: text("last_name").notNull(),

	imageUrl: text("image_url"),

	createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
		() => new Date(),
	),
});

export const userRelations = relations(users, ({ many }) => ({
	gigs: many(gigs),
}));

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
