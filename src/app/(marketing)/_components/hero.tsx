import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import PulsatingButton from "@/components/magicui/pulsating-button";
import SparklesText from "@/components/magicui/sparkles-text";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

export default function Hero() {
	return (
		<div className="text-center flex flex-col items-center justify-center">
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="white"
			/>

			<AnimatedGradientText>
				🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
				<span
					className={cn(
						`inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
					)}
				>
					Introducing IndieGig
				</span>
				<ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
			</AnimatedGradientText>

			<SparklesText
				text="Get freelance leads on autopilot"
				className="tracking-wider mt-4 max-w-2xl mx-auto"
			/>

			<p className="text-lg text-muted-foreground mt-4 max-w-lg mx-auto">
				Seamlessly connect with premium clients, manage projects with ease, and
				secure payments instantly. Whether you're just starting out or a
				seasoned professional, IndieGig is your one-stop platform for freelance
				success.
			</p>

			<SignedIn>
				<Link href="/dashboard" passHref className="mt-6">
					<PulsatingButton>
						<span className="text-white">View Dashboard</span>
					</PulsatingButton>
				</Link>
			</SignedIn>

			<SignedOut>
				<div className="flex gap-6 mt-6">
					<SignInButton>
						<PulsatingButton>
							<span className="text-white">Hire Top Talent</span>
						</PulsatingButton>
					</SignInButton>

					<SignInButton>
						<PulsatingButton>
							<span className="text-white">Find Jobs</span>
						</PulsatingButton>
					</SignInButton>
				</div>
			</SignedOut>
		</div>
	);
}
