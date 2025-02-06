"use client";

import { Button } from "@/components/ui/button";
import { categories } from "@/lib/category";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Categories() {
	const colorClasses = {
		"web-development": "bg-blue-500",
		"mobile-development": "bg-purple-500",
		"bot-development": "bg-green-500",
		"ui-ux-design": "bg-red-500",
		"graphic-design": "bg-yellow-500",
		"content-creation": "bg-orange-500",
		marketing: "bg-pink-500",
	};

	const lightColorClasses = {
		"web-development": "text-blue-100",
		"mobile-development": "text-purple-100",
		"bot-development": "text-green-100",
		"ui-ux-design": "text-red-100",
		"graphic-design": "text-yellow-100",
		"content-creation": "text-orange-100",
		marketing: "text-pink-100",
	};

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-semibold">Recommended Categories</h2>
			</div>

			<div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap gap-2">
				{categories.map((category, index) => (
					<Link
						key={index}
						href={`/category/${category.id}`}
						className="no-underline flex-shrink-0"
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
									colorClasses[category.id as keyof typeof colorClasses],
								)}
							>
								<category.icon
									className={cn(
										"size-3.5",
										lightColorClasses[
											category.id as keyof typeof lightColorClasses
										],
									)}
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
