import { getProviders } from "next-auth/react";
import OAuthButton from "./_components/oauth-button";

export default async function Page() {
	const providers = await getProviders();

	if (!providers) {
		return <div>No providers found</div>;
	}

	return (
		<div className="flex flex-col items-center justify-center gap-6">
			<h1 className="text-4xl font-bold">Sign In</h1>

			<div className="flex flex-col gap-2">
				{Object.values(providers).map((provider) => (
					<OAuthButton key={provider.id} provider={provider} />
				))}
			</div>
		</div>
	);
}
