// app/category/[id]/InfiniteGigs.tsx
"use client";

import { GigCard } from "@/components/gig-card";
import { api } from "@/trpc/react";
import { useEffect, useRef } from "react";

type InfiniteGigsProps = {
	categoryId: string;
};

export default function InfiniteGigs({ categoryId }: InfiniteGigsProps) {
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		error,
	} = api.gigs.getGigs.useInfiniteQuery(
		{ category: categoryId, limit: 25 },
		{
			getNextPageParam: (lastPage, pages) =>
				lastPage.length < 25 ? undefined : lastPage.length + pages.length * 25,
		},
	);

	const loadMoreRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting && hasNextPage && !isFetchingNextPage) {
				fetchNextPage();
			}
		});

		const currentElement = loadMoreRef.current;
		if (currentElement) {
			observer.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
		};
	}, [hasNextPage, isFetchingNextPage, fetchNextPage]);

	if (isLoading) return <div>Loading gigs...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div className="flex flex-col gap-4">
			{data?.pages.map((page, pageIndex) => (
				<div
					key={pageIndex}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
				>
					{page.map((gig) => (
						<GigCard
							key={gig.id}
							id={gig.id}
							title={gig.title}
							price={gig.price}
							imageUrl={gig.imageUrl}
							creator={{
								name: gig.user?.username ?? "Unknown",
								imageUrl: gig.user?.imageUrl ?? undefined,
							}}
						/>
					))}
				</div>
			))}

			<div ref={loadMoreRef} className="text-center py-4">
				{isFetchingNextPage
					? "Loading more gigs..."
					: hasNextPage
						? "Scroll down to load more"
						: "No more gigs"}
			</div>
		</div>
	);
}
