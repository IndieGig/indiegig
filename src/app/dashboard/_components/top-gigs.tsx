import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export default function TopGigs() {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-semibold">Most popular Gigs</h2>
				<Button variant="link" className="p-0">
					Show All <ChevronRight className="size-4 ml-1" />
				</Button>
			</div>

			<Carousel className="w-full relative">
				<CarouselContent className="-ml-1">
					{Array.from({ length: 10 }).map((_, index) => (
						<CarouselItem
							key={index}
							className="pl-1 md:basis-1/2 lg:basis-1/3"
						>
							<div className="flex flex-col p-1 gap-y-2">
								<div className="aspect-video relative">
									<Image
										src="/demonslayer.webp"
										alt="placeholder"
										fill
										className="rounded-lg object-cover"
									/>
								</div>
								<div>
									<p className="text-sm text-muted-foreground inline-flex items-center gap-2">
										<Avatar className="size-6">
											<AvatarImage src="/demonslayer.webp" />
											<AvatarFallback>V</AvatarFallback>
										</Avatar>
										Vanxh
									</p>

									<h3 className="font-semibold text-lg truncate">
										Gig Title Here
									</h3>
									<div className="flex items-center text-sm mt-1">
										<Star className="h-4 w-4 text-yellow-400 mr-1" />
										<span className="font-medium">4.9</span>
										<span className="text-muted-foreground ml-1">(123)</span>
									</div>
									<p className="font-bold mt-2">From $99</p>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
