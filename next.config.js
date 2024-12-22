await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
	images: {
		remotePatterns: [
			{ hostname: "placehold.co" },
			{ hostname: "images.unsplash.com" },
		],
	},
};

export default config;
