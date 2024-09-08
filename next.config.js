import MillionLint from "@million/lint";
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {};
export default MillionLint.next({
	rsc: true,
})(config);
