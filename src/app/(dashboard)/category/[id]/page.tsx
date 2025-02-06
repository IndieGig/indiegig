import { categories } from "@/lib/category";
import { api } from "@/trpc/server";

export default async function CategoryPage({
	params,
	searchParams,
}: {
	params: { id: string };
	searchParams: { limit: string; offset: string };
}) {
	const { id } = params;

	const category = categories.find((c) => c.id === id);

	if (!category) {
		return <div>Category not found</div>;
	}

	const gigs = await api.gigs.getGigs({
		category: id,
		limit: searchParams.limit ? parseInt(searchParams.limit) : undefined,
		offset: searchParams.offset ? parseInt(searchParams.offset) : undefined,
	});

	return (
		<div className="container mx-auto flex flex-col gap-6 py-6">
			<h1 className="text-2xl font-bold">{category.name}</h1>
		</div>
	);
}
