import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

import PulsatingButton from "@/components/magicui/pulsating-button";
import { Button } from "@/components/ui/button";

export default function CTA() {
	return (
		<div className="text-center flex flex-col items-center justify-center">
			<h3 className="text-4xl font-bold max-w-2xl mx-auto">
				Ready to Transform Your Projects or Jumpstart Your Freelance Journey?
			</h3>

			<p className="text-lg text-muted-foreground mt-4 max-w-lg mx-auto">
				IndieGig is your one-stop platform for freelance success.
			</p>

			<SignedIn>
				<Link href="/dashboard" passHref className="mt-6">
					<PulsatingButton>
						<span className="text-white">View Dashboard</span>
					</PulsatingButton>
				</Link>
			</SignedIn>

			<SignedOut>
				<div className="flex gap-6 mt-6">
					<Button>Hire Freelancers</Button>
					<Button variant="outline">Start Freelancing</Button>
				</div>
			</SignedOut>
		</div>
	);
}
