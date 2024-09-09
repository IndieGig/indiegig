import Footer from "@/components/footer";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="relative flex flex-col min-h-screen">
			<Navbar />

			<AnimatedGridPattern
				numSquares={30}
				maxOpacity={0.1}
				duration={3}
				repeatDelay={1}
				className={cn(
					"[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
					"inset-x-0 inset-y-[0%] h-[80%] skew-y-12",
				)}
			/>

			<div className="pt-24 md:pt-32 flex-1 flex flex-col">
				<div className="flex flex-1 flex-col">{children}</div>
			</div>

			<Footer />
		</main>
	);
}
