import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Navbar() {
	return (
		<header className="fixed top-4 left-4 right-4 z-50">
			<nav className="backdrop-blur-sm bg-header/[0.02] border border-header/50 rounded-2xl mx-auto">
				<div className="mx-auto px-4">
					<div className="flex justify-between items-center py-2">
						<div className="flex-shrink-0">
							<Link href="/" className="flex items-center">
								<Image
									src="/indiegig.webp"
									alt="IndieGig"
									width={28}
									height={28}
									className="rounded-full"
								/>
								<span className="ml-2 font-semibold tracking-wider">
									IndieGig
								</span>
							</Link>
						</div>

						<div className="hidden md:flex space-x-6">{/* TODO */}</div>

						<SignedIn>
							<UserButton />
						</SignedIn>
						<SignedOut>
							<SignInButton>
								<Button size="sm" className="rounded-xl">
									Sign In
								</Button>
							</SignInButton>
						</SignedOut>
					</div>
				</div>
			</nav>
		</header>
	);
}
