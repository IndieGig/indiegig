import { ChevronRight } from "lucide-react";

import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import SparklesText from "@/components/magicui/sparkles-text";
import { cn } from "@/lib/utils";

export default function Hero() {
	return (
		<div className="pt-6 md:pt-12 text-center">
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

			<SparklesText text="IndieGig" className="tracking-wider mt-4" />

			<p className="text-lg text-muted-foreground mt-4 max-w-lg mx-auto">
				IndieGig is a platform for developers to find gigs and work together on
				projects as well as companies to find developers for their projects.
			</p>
		</div>
	);
}
