"use client";

import { WandSparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function RecommendedActionCard() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={cn(
				"relative overflow-hidden max-w-full rounded-xl p-6",
				"bg-card text-card-foreground",
				"border border-border/40 shadow-sm transition-all duration-300",
				"hover:shadow-lg hover:border-primary/20",
				"before:absolute before:inset-0 before:-translate-x-full",
				"before:animate-[shimmer_2s_infinite]",
				"before:bg-gradient-to-r",
				"before:from-transparent before:via-primary/5 before:to-transparent",
				"dark:before:via-primary/10",
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="flex flex-col gap-y-4">
				<div className="flex items-center gap-x-2">
					<span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
						Recommended
					</span>
				</div>

				<div className="flex items-start gap-x-4 sm:items-center">
					<div
						className={cn(
							"rounded-full p-3.5",
							"bg-primary text-primary-foreground",
							"transition-transform duration-300",
							isHovered ? "scale-110" : "",
						)}
					>
						<WandSparkles className="size-6" strokeWidth={2} />
					</div>

					<div className="flex flex-1 flex-col gap-y-1">
						<h5 className="text-xl font-semibold tracking-tight text-foreground">
							Create a new gig
						</h5>
						<p className="text-sm text-muted-foreground leading-relaxed">
							Start receiving applications by creating a detailed gig listing
							that stands out.
						</p>
					</div>

					<Link href="/dashboard/create-gig" className="sm:ml-4">
						<Button
							size="lg"
							className={cn(
								"transition-all duration-300",
								isHovered
									? "bg-primary/90 scale-105 shadow-lg dark:bg-primary/80"
									: "shadow-sm",
							)}
						>
							Create a Gig
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
