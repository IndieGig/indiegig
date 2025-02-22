import { ChevronRight } from "lucide-react";

import { GigCard } from "@/components/gig-card";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { RouterOutputs } from "@/trpc/react";
import Link from "next/link";

export default function GigsCarousel({
	title,
	gigs,
	category,
}: {
	title: string;
	gigs: RouterOutputs["gigs"]["getGigs"];
	category: string;
}) {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-semibold">{title}</h2>
				<Link href={`/category/${category}`} className="p-0">
					<Button variant="link">
						Show All <ChevronRight className="size-4 ml-1" />
					</Button>
				</Link>
			</div>

			{gigs.length > 0 && (
				<Carousel className="w-full relative" opts={{ loop: true }}>
					<CarouselContent className="-ml-4">
						{gigs.map((gig, index) => (
							<CarouselItem
								key={index}
								className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
							>
								<GigCard
									id={gig.id}
									title={gig.title}
									price={gig.price}
									imageUrl={gig.imageUrl}
									creator={{
										name: gig.user?.username ?? "Unknown",
										imageUrl: gig.user?.imageUrl ?? undefined,
									}}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			)}
			{gigs.length === 0 && (
				<div className="flex items-center justify-center h-full">
					<p className="text-sm text-muted-foreground">No gigs found</p>
				</div>
			)}
		</div>
	);
}
