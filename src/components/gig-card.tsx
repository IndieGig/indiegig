import { Star } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarFilledIcon } from "@radix-ui/react-icons";

export function GigCard() {
	return (
		<div className="flex flex-col gap-y-2">
			<div className="aspect-video relative">
				<Image
					src="/demonslayer.webp"
					alt="placeholder"
					fill
					className="rounded-lg object-cover"
				/>
			</div>
			<div>
				<div className="flex items-start justify-between">
					<div className="inline-flex items-center gap-1">
						<Avatar className="size-6">
							<AvatarImage src="/demonslayer.webp" />
							<AvatarFallback>V</AvatarFallback>
						</Avatar>
						<span className="text-sm font-bold">Vanxh</span>
					</div>

					<div className="flex items-center text-sm">
						<StarFilledIcon className="h-4 w-4 text-yellow-500 mr-1" />
						<span className="font-bold">4.9</span>
						<span className="text-muted-foreground ml-1">(123)</span>
					</div>
				</div>

				<h3 className="font-semibold text-lg truncate mt-2">Gig Title Here</h3>

				<p className="font-bold mt-1">From $99</p>
			</div>
		</div>
	);
}
