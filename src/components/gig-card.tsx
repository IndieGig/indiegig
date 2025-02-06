"use client";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { CircleDollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function GigCard({
	id,
	title,
	price,
	imageUrl,
	creator,
	className,
}: {
	id: number;
	title?: string;
	price?: number;
	imageUrl?: string;
	creator: {
		name: string;
		imageUrl?: string;
	};
	className?: string;
}) {
	return (
		<div
			className={cn(
				"group flex h-full flex-col gap-y-3 rounded-xl border bg-card p-3 transition-all hover:shadow-lg",
				className,
			)}
		>
			<div className="aspect-video relative overflow-hidden rounded-lg">
				{imageUrl ? (
					<Image
						src={imageUrl}
						alt={title || "Gig image"}
						fill
						className="object-cover"
					/>
				) : (
					<Skeleton className="h-full w-full" />
				)}
			</div>

			<div className="flex flex-col flex-1 space-y-2 h-full">
				<div className="flex items-start justify-between gap-x-2">
					<div className="flex items-center gap-2">
						<Avatar className="size-8 border-2 border-primary/10">
							<AvatarImage src={creator.imageUrl} />
							<AvatarFallback className="font-medium">
								{creator.name.charAt(0)}
							</AvatarFallback>
						</Avatar>
						<div className="flex flex-col">
							<span className="text-sm font-medium leading-none">
								{creator.name}
							</span>
							<span className="text-xs text-muted-foreground">
								Level 2 Seller
							</span>
						</div>
					</div>

					<div className="flex items-center text-sm">
						<StarFilledIcon className="h-4 w-4 text-yellow-500 mr-1" />
						<span className="font-medium">4.9</span>
						<span className="text-muted-foreground ml-1">(123)</span>
					</div>
				</div>

				<div className="min-h-[3rem]">
					<h3 className="line-clamp-2 text-base font-medium leading-snug group-hover:text-primary/90">
						{title || "Professional service title goes here"}
					</h3>
				</div>

				<div className="flex items-center justify-between mt-auto pt-1">
					<div className="flex items-center gap-x-1.5">
						<CircleDollarSign className="size-4 text-muted-foreground" />
						<span className="font-medium text-sm">
							Starting at <span className="text-base">${price ?? 0}</span>
						</span>
					</div>
					<Link href={`/gigs/${id}`}>
						<Button variant="ghost" size="sm">
							View Details
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
