import { integer, text } from "drizzle-orm/sqlite-core";
import { createTable } from "./_table";
import { users } from "./user";

export const sessions = createTable("session", {
	sessionToken: text("sessionToken").primaryKey(),
	userId: text("userId")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});
