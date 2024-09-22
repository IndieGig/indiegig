import { Star } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function GigCard() {
	return (
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

				<h3 className="font-semibold text-lg truncate">Gig Title Here</h3>
				<div className="flex items-center text-sm mt-1">
					<Star className="h-4 w-4 text-yellow-400 mr-1" />
					<span className="font-medium">4.9</span>
					<span className="text-muted-foreground ml-1">(123)</span>
				</div>
				<p className="font-bold mt-2">From $99</p>
			</div>
		</div>
	);
}
