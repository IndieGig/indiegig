import Banner from "./_components/banner";
import Categories from "./_components/categories";
import TopGigs from "./_components/top-gigs";

export default function Page() {
	return (
		<main className="flex flex-col gap-4">
			<Banner />

			<div className="container mx-auto flex flex-col gap-6">
				<Categories />
				<TopGigs />
			</div>
		</main>
	);
}
