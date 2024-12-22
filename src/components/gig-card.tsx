import { StarFilledIcon } from "@radix-ui/react-icons";
import { CircleDollarSign } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function GigCard({
	title,
	price,
	imageUrl,
	creator,
}: {
	title: string;
	price: number;
	imageUrl: string;
	creator: {
		name: string;
		imageUrl?: string;
	};
}) {
	return (
		<div className="flex flex-col gap-y-2">
			<div className="aspect-video relative">
				<Image
					src={imageUrl}
					alt="placeholder"
					fill
					className="rounded-lg object-cover"
				/>
			</div>
			<div>
				<div className="flex items-start justify-between">
					<div className="inline-flex items-center gap-1">
						<Avatar className="size-6">
							<AvatarImage src={creator.imageUrl} />
							<AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
						</Avatar>
						<span className="text-sm font-bold">{creator.name}</span>
					</div>

					<div className="flex items-center text-sm">
						<StarFilledIcon className="h-4 w-4 text-yellow-500 mr-1" />
						<span className="font-bold">4.9</span>
						<span className="text-muted-foreground ml-1">(123)</span>
					</div>
				</div>

				<h3 className="text-lg line-clamp-2 mt-1 leading-snug">{title}</h3>

				<div className="flex items-center gap-x-1 mt-1">
					<CircleDollarSign className="size-4" />
					<span className="font-bold">{price} USD</span>
				</div>
			</div>
		</div>
	);
}
