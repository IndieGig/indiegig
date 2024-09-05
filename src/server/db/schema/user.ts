import { integer, text } from "drizzle-orm/sqlite-core";
import { createTable } from "./_table";

export const users = createTable("users", {
	id: integer("id").primaryKey(),
	clerkId: text("clerkId").notNull(),
});
