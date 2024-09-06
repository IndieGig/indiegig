import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		TURSO_DATABASE_URL: z.string().url(),
		TURSO_AUTH_TOKEN: z.string(),
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
		CLERK_SECRET_KEY: z.string(),
		CLERK_WEBHOOK_SECRET:
			process.env.NODE_ENV === "development"
				? z.string().optional()
				: z.string(),
	},
	client: {
		NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string(),
		NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().default("/sign-in"),
		NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().default("/sign-up"),
	},
	runtimeEnv: {
		TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,
		TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
		NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
			process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
		CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
		NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
		NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
		CLERK_WEBHOOK_SECRET: process.env.CLERK_WEBHOOK_SECRET,
	},
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
	emptyStringAsUndefined: true,
});
