import { HydrateClient } from "@/trpc/server";

export default function Providers({ children }: { children: React.ReactNode }) {
	return <HydrateClient>{children}</HydrateClient>;
}
