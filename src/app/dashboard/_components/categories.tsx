"use client";

import { Button } from "@/components/ui/button";
import { categories } from "@/lib/category";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Categories() {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-semibold">Recommended Categories</h2>
			</div>

			<div className="flex flex-wrap gap-2">
				{categories.map((category, index) => (
					<Link
						key={index}
						href={`/category/${category.id}`}
						className="no-underline"
					>
						<Button
							variant="outline"
							className={cn(
								"group flex items-center gap-x-2 rounded-full transition-colors hover:bg-background/50",
								"hover:border-primary/20",
							)}
						>
							<div
								className={cn(
									"flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
									category.color,
								)}
							>
								<category.icon
									className={cn("size-3.5", category.lightColor)}
								/>
							</div>
							<span className="text-sm font-medium">{category.name}</span>
						</Button>
					</Link>
				))}
			</div>
		</div>
	);
}
