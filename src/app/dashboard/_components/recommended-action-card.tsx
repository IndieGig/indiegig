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
				"rounded-lg p-4 sm:p-5",
				"bg-card",
				"border border-border",
				"transition-all duration-300",
				isHovered ? "shadow-lg" : "shadow-sm",
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="flex flex-col gap-y-4">
				<span className="self-start rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
					Recommended
				</span>

				<div className="flex flex-col sm:flex-row items-start gap-4 sm:items-center">
					<div
						className={cn(
							"rounded-lg p-3",
							"bg-primary",
							"text-primary-foreground",
							"transition-transform duration-300",
							isHovered ? "scale-110" : "",
						)}
					>
						<WandSparkles className="size-5" strokeWidth={2} />
					</div>

					<div className="flex-1 space-y-1">
						<h5 className="text-lg font-semibold tracking-tight text-foreground">
							Create a new gig
						</h5>
						<p className="text-sm text-muted-foreground">
							Start receiving applications by creating a detailed gig listing
							that stands out.
						</p>
					</div>

					<Link
						href="/dashboard/create-gig"
						className="sm:ml-4 w-full sm:w-auto"
					>
						<Button
							className={cn(
								"w-full sm:w-auto",
								"transition-all duration-300",
								isHovered ? "shadow-md" : "",
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
