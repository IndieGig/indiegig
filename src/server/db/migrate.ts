import { migrate } from "drizzle-orm/libsql/migrator";
import { conn, db } from ".";

await migrate(db, { migrationsFolder: "./migrations" });

conn.close();
