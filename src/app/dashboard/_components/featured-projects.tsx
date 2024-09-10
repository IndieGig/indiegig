const projects = [
	{
		name: "Freelancer Name",
		description: "Brief Description",
		image: "/image-placeholder.jpg",
	},
	// Add more projects as needed
];

const FeaturedProjects = () => (
	<section className="py-12 bg-gray-100">
		<h2 className="text-2xl font-bold text-center mb-8">
			Featured Freelancers/Projects
		</h2>
		<div className="flex flex-wrap justify-center gap-8">
			{projects.map((project) => (
				<div
					key={project.name}
					className="w-64 bg-white shadow rounded overflow-hidden"
				>
					<img
						src={project.image}
						alt={project.name}
						className="w-full h-40 object-cover"
					/>
					<div className="p-4">
						<h3 className="text-xl font-semibold">{project.name}</h3>
						<p className="text-gray-600">{project.description}</p>
					</div>
				</div>
			))}
		</div>
	</section>
);

export default FeaturedProjects;
