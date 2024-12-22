import { WandSparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function RecommendedActionCard() {
	return (
		<div className="bg-card max-w-full rounded-lg p-4 flex flex-col gap-y-2 text-card-foreground">
			<h4 className="text-sm font-semibold uppercase tracking-wide">
				Recommended for you
			</h4>

			<div className="flex items-center gap-x-2">
				<div className="bg-primary text-primary-foreground rounded-full p-3">
					<WandSparkles className="size-5" />
				</div>

				<div className="flex flex-col">
					<h5 className="text-lg font-semibold">Create a new gig</h5>
					<p className="text-sm text-muted-foreground">
						Create a new gig to start receiving applications.
					</p>
				</div>

				<Link href="/dashboard/create-gig" passHref>
					<Button className="ml-6">Create a Gig</Button>
				</Link>
			</div>
		</div>
	);
}
