"use client";

import { useState } from "react";

const SearchFilter = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleFilter = () => {
		alert("Filter functionality coming soon!");
	};

	return (
		<section className="text-center py-8">
			<input
				type="text"
				placeholder="Search for jobs/talents..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				className="border border-gray-300 p-2 rounded w-1/2"
			/>
			<button
				onClick={handleFilter}
				className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
			>
				Filters
			</button>
		</section>
	);
};

export default SearchFilter;
