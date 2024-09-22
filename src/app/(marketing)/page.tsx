import CTA from "./_components/cta";
import Features from "./_components/features";
import Hero from "./_components/hero";

export default async function Page() {
	return (
		<main className="container mx-auto space-y-24">
			<Hero />
			<Features />
			<CTA />
		</main>
	);
}
