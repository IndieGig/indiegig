import { ThemeToggle } from "@/components/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { SiGithub, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-background text-foreground mt-12 border-t border-border z-10">
			<div className="container mx-auto px-6 py-8 md:py-12">
				<div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-start">
					<div className="flex flex-col items-center md:items-start">
						<Link href="/" className="text-2xl font-bold inline-block mb-4">
							IndieGig
						</Link>
						<div className="flex items-center space-x-4 mt-4">
							<Link
								target="_blank"
								href="https://twitter.com"
								aria-label="Twitter"
								className="text-foreground hover:text-primary"
							>
								<SiX className="h-5 w-5" />
							</Link>
							<Link
								target="_blank"
								href="https://instagram.com"
								aria-label="Instagram"
								className="text-foreground hover:text-primary"
							>
								<SiInstagram className="h-5 w-5" />
							</Link>
							<Link
								target="_blank"
								href="https://github.com/IndieGig/indiegig"
								aria-label="GitHub"
								className="text-foreground hover:text-primary"
							>
								<SiGithub className="h-5 w-5" />
							</Link>
							<ThemeToggle />
						</div>
					</div>

					<Separator className="md:hidden my-6" />

					<nav className="flex flex-col items-center md:items-start md:flex-row md:space-x-12">
						<div className="flex flex-col space-y-4 items-center md:items-start md:flex-row md:space-y-0 md:space-x-6">
							<Link
								href="/about"
								className="text-foreground hover:text-primary transition-colors"
							>
								About Us
							</Link>
							<Link
								href="/contact"
								className="text-foreground hover:text-primary transition-colors"
							>
								Contact Us
							</Link>
							<Link
								href="/terms"
								className="text-foreground hover:text-primary transition-colors"
							>
								Terms
							</Link>
							<Link
								href="/privacy"
								className="text-foreground hover:text-primary transition-colors"
							>
								Privacy
							</Link>
						</div>

						<Separator className="md:hidden my-6" />

						<div className="flex flex-col items-center md:items-start space-y-2">
							<span className="text-sm font-semibold text-muted-foreground">
								Developers
							</span>
							<Link
								target="_blank"
								href="https://github.com/vanxh"
								className="text-sm text-foreground hover:text-primary transition-colors"
							>
								Vanxh
							</Link>
							<Link
								target="_blank"
								href="https://github.com/savvyshagun"
								className="text-sm text-foreground hover:text-primary transition-colors"
							>
								Shagun
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</footer>
	);
}
