import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RecommendedActionCard from "./recommended-action-card";

export default async function Banner() {
	const user = await currentUser();

	return (
		<div className="text-white p-4 relative">
			<Image
				src="/demonslayer.webp"
				alt="Demon Slayer"
				fill
				priority
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80 z-[-1]"></div>

			<div className="flex flex-col justify-between h-full gap-y-4 container mx-auto">
				<h3 className="text-2xl font-semibold inline-flex items-center gap-2">
					Welcome back,
					<Avatar>
						<AvatarImage src={user?.imageUrl} />
						<AvatarFallback>
							{user?.firstName?.charAt(0)}
							{user?.lastName?.charAt(0)}
						</AvatarFallback>
					</Avatar>
					{user?.firstName}
				</h3>

				<div className="h-10 lg:h-full"></div>

				<div className="flex items-center gap-4 flex-col lg:flex-row">
					<RecommendedActionCard />
				</div>
			</div>
		</div>
	);
}
