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

export default function TopGigs() {
	const topGigs = [
		{
			title: "I will build you your own custom discord bot",
			price: 99,
			imageUrl: "/gig-image.jpeg",
			creator: { name: "Vanxh", imageUrl: "/demonslayer.webp" },
		},
		{
			title: "I will build you custom thumbnail for your youtube video",
			price: 99,
			imageUrl: "/demonslayer.webp",
			creator: { name: "Vanxh", imageUrl: "/demonslayer.webp" },
		},
		{
			title: "I will build you your own custom discord bot",
			price: 99,
			imageUrl: "/gig-image.jpeg",
			creator: { name: "Vanxh", imageUrl: "/demonslayer.webp" },
		},
	];

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-semibold">Most popular Gigs</h2>
				<Button variant="link" className="p-0">
					Show All <ChevronRight className="size-4 ml-1" />
				</Button>
			</div>

			<Carousel className="w-full relative" opts={{ loop: true }}>
				<CarouselContent className="-ml-4">
					{topGigs.map((gig, index) => (
						<CarouselItem
							key={index}
							className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
						>
							<GigCard
								title={gig.title}
								price={gig.price}
								imageUrl={gig.imageUrl}
								creator={gig.creator}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
