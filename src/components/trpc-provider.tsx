import { HydrateClient } from "@/trpc/server";

export default function TRPCProvider({
	children,
}: { children: React.ReactNode }) {
	return <HydrateClient>{children}</HydrateClient>;
}
