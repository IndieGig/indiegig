import { categories } from "@/lib/category";
import Banner from "../../_components/banner";
import InfiniteGigs from "./_components/infinite-gigs";

export default function CategoryPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;
	const category = categories.find((c) => c.id === id);

	if (!category) {
		return <div>Category not found</div>;
	}

	return (
		<div className="flex flex-col gap-4">
			<Banner />

			<div className="container mx-auto flex flex-col gap-6">
				<h1 className="text-2xl font-bold">{category.name}</h1>

				<InfiniteGigs categoryId={id} />
			</div>
		</div>
	);
}
