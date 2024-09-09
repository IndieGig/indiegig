import Navbar from "@/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="relative flex flex-col min-h-screen">
			<Navbar />

			<div className="pt-24 md:pt-32 flex-1 flex flex-col">
				<div className="flex flex-1 flex-col">{children}</div>
			</div>
		</main>
	);
}
