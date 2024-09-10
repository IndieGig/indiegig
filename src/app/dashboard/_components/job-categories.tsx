const JobCategories = () => (
	<section className="py-12">
		<h2 className="text-2xl font-bold text-center mb-8">Job Categories</h2>
		<div className="flex flex-wrap justify-center space-x-4">
			{["Web Development", "Graphic Design", "Marketing", "Writing"].map(
				(category) => (
					<a
						key={category}
						href="#"
						className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 mb-4"
					>
						{category}
					</a>
				),
			)}
		</div>
	</section>
);

export default JobCategories;
