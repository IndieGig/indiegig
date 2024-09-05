"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { LogIn } from "lucide-react";
import { ClientSafeProvider, signIn } from "next-auth/react";

type ProviderTheme = {
	Icon: React.ElementType;
	color: string;
};

const providerThemes: Partial<Record<ClientSafeProvider["id"], ProviderTheme>> =
	{
		discord: {
			Icon: DiscordLogoIcon,
			color: "bg-discord hover:bg-discord/90",
		},
		default: {
			Icon: LogIn,
			color: "",
		},
	};

interface OAuthButtonProps {
	provider: ClientSafeProvider;
}

export default function OAuthButton({ provider }: OAuthButtonProps) {
	const theme = (providerThemes[provider.id] ?? providerThemes.default)!;
	const { Icon, color } = theme;

	return (
		<Button
			type="button"
			className={cn(color)}
			onClick={() => signIn(provider.id)}
		>
			<Icon className="w-4 h-4 mr-2" />
			Sign in with {provider.name}
		</Button>
	);
}
