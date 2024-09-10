import CallToAction from "./_components/call-to-action";
import FeaturedProjects from "./_components/featured-projects";
import Features from "./_components/features";
import Hero from "./_components/hero";
import HowItWorks from "./_components/how-it-works";
import JobCategories from "./_components/job-categories";
import SearchFilter from "./_components/search-filter";

export default function Home() {
	return (
		<main>
			<Hero />
			<SearchFilter />
			<JobCategories />
			<Features />
			<HowItWorks />
			<FeaturedProjects />
			<CallToAction />
		</main>
	);
}
