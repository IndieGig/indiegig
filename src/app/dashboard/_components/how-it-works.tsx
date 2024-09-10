// components/HowItWorks.js
const steps = [
	{
		title: "Profile",
		description: "Build a robust profile for freelance success.",
	},
	{
		title: "Browse",
		description: "Explore available projects that match your skills.",
	},
	{
		title: "Collaborate",
		description: "Work seamlessly with clients from around the world.",
	},
	{
		title: "Get Paid",
		description: "Receive payments on time through secure methods.",
	},
];

const HowItWorks = () => (
	<section className="py-12">
		<h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
		<div className="flex flex-wrap justify-center gap-8">
			{steps.map((step) => (
				<div
					key={step.title}
					className="w-64 p-4 bg-white shadow rounded text-center relative group"
				>
					<h3 className="text-xl font-semibold">{step.title}</h3>
					<p className="absolute bottom-0 left-0 w-full bg-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
						{step.description}
					</p>
				</div>
			))}
		</div>
	</section>
);

export default HowItWorks;
