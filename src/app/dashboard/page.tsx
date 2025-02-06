import { api } from "@/trpc/server";
import Banner from "./_components/banner";
import Categories from "./_components/categories";
import GigsCarousel from "./_components/gigs-carousel";

export default async function Page() {
	const webDevelopmentGigs = await api.gigs.getGigs({
		category: "web-development",
	});

	const mobileDevelopmentGigs = await api.gigs.getGigs({
		category: "mobile-development",
	});

	const botDevelopmentGigs = await api.gigs.getGigs({
		category: "bot-development",
	});

	const uiUxDesignGigs = await api.gigs.getGigs({
		category: "ui-ux-design",
	});

	const graphicDesignGigs = await api.gigs.getGigs({
		category: "graphic-design",
	});

	const contentCreationGigs = await api.gigs.getGigs({
		category: "content-creation",
	});

	return (
		<main className="flex flex-col gap-4">
			<Banner />

			<div className="container mx-auto flex flex-col gap-6">
				<Categories />
				<GigsCarousel
					title="Web Development Gigs"
					gigs={webDevelopmentGigs}
					category="web-development"
				/>
				<GigsCarousel
					title="Mobile Development Gigs"
					gigs={mobileDevelopmentGigs}
					category="mobile-development"
				/>
				<GigsCarousel
					title="Bot Development Gigs"
					gigs={botDevelopmentGigs}
					category="bot-development"
				/>
				<GigsCarousel
					title="UI/UX Design Gigs"
					gigs={uiUxDesignGigs}
					category="ui-ux-design"
				/>
				<GigsCarousel
					title="Graphic Design Gigs"
					gigs={graphicDesignGigs}
					category="graphic-design"
				/>
				<GigsCarousel
					title="Content Creation Gigs"
					gigs={contentCreationGigs}
					category="content-creation"
				/>
			</div>
		</main>
	);
}
