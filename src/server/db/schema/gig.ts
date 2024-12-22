import { relations, sql } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";
import { createTable } from "./_table";
import { users } from "./user";

export const gigs = createTable("gigs", {
	id: integer("id").primaryKey(),
	userId: integer("user_id").references(() => users.id),

	imageUrl: text("image_url").notNull(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	price: integer("price").notNull(),
	category: text("category").notNull(),

	createdAt: text("created_at").default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
		() => new Date(),
	),
});

export const gigRelations = relations(gigs, ({ one }) => ({
	user: one(users, {
		fields: [gigs.userId],
		references: [users.id],
	}),
}));

export type InsertGig = typeof gigs.$inferInsert;
export type SelectGig = typeof gigs.$inferSelect;
