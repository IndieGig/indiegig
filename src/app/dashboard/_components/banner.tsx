import { currentUser } from "@clerk/nextjs/server";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default async function Banner() {
	const user = await currentUser();

	return (
		<div className="text-white p-4 relative h-48">
			<Image
				src="/demonslayer.webp"
				alt="Demon Slayer"
				fill
				className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80 z-[-1]"></div>

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
		</div>
	);
}
