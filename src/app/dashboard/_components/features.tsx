import { FaBriefcase, FaLock, FaRobot, FaUserCircle } from "react-icons/fa";

const Features = () => (
	<section className="py-12 bg-gray-100">
		<h2 className="text-2xl font-bold text-center mb-8">Why IndieGig</h2>
		<div className="flex flex-wrap justify-center gap-8">
			{/* Marketplace Feature */}
			<div className="w-64 p-4 bg-white shadow rounded text-center relative group">
				<FaBriefcase className="text-3xl mb-2 mx-auto text-gray-700" />
				<h3 className="text-xl font-semibold">Marketplace</h3>
				<p className="absolute bottom-0 left-0 w-full bg-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
					Connect with clients and freelancers across various industries.
				</p>
			</div>

			{/* Secure Payments Feature */}
			<div className="w-64 p-4 bg-white shadow rounded text-center relative group">
				<FaLock className="text-3xl mb-2 mx-auto text-gray-700" />
				<h3 className="text-xl font-semibold">Secure Payments</h3>
				<p className="absolute bottom-0 left-0 w-full bg-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
					Guaranteed payments through secure channels.
				</p>
			</div>

			{/* AI Recommendations Feature */}
			<div className="w-64 p-4 bg-white shadow rounded text-center relative group">
				<FaRobot className="text-3xl mb-2 mx-auto text-gray-700" />
				<h3 className="text-xl font-semibold">AI Recommendations</h3>
				<p className="absolute bottom-0 left-0 w-full bg-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
					Receive project recommendations powered by AI.
				</p>
			</div>

			{/* Profile Building Feature */}
			<div className="w-64 p-4 bg-white shadow rounded text-center relative group">
				<FaUserCircle className="text-3xl mb-2 mx-auto text-gray-700" />
				<h3 className="text-xl font-semibold">Profile Building</h3>
				<p className="absolute bottom-0 left-0 w-full bg-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
					Create a professional profile to attract top clients.
				</p>
			</div>
		</div>
	</section>
);

export default Features;
