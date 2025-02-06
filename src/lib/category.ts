import {
	Bot,
	Code2,
	Megaphone,
	Palette,
	PenTool,
	Smartphone,
	Video,
} from "lucide-react";

export const categories = [
	{
		id: "web-development",
		name: "Web Development",
		description: "Find web developers for your project.",
		icon: Code2,
		color: "bg-blue-500",
		lightColor: "bg-blue-100",
	},
	{
		id: "mobile-development",
		name: "Mobile Development",
		description: "Find mobile developers for your project.",
		icon: Smartphone,
		color: "bg-purple-500",
		lightColor: "bg-purple-100",
	},
	{
		id: "bot-development",
		name: "Bot Development",
		description: "Find bot developers for your project.",
		icon: Bot,
		color: "bg-green-500",
		lightColor: "bg-green-100",
	},
	{
		id: "ui-ux-design",
		name: "UI/UX Design",
		description: "Find UI/UX designers for your project.",
		icon: Palette,
		color: "bg-pink-500",
		lightColor: "bg-pink-100",
	},
	{
		id: "graphic-design",
		name: "Graphic Design",
		description: "Find graphic designers for your project.",
		icon: PenTool,
		color: "bg-orange-500",
		lightColor: "bg-orange-100",
	},
	{
		id: "content-creation",
		name: "Content Creation",
		description: "Find content creators for your project.",
		icon: Video,
		color: "bg-green-500",
		lightColor: "bg-green-100",
	},
	{
		id: "marketing",
		name: "Marketing",
		description: "Find marketing experts for your project.",
		icon: Megaphone,
		color: "bg-red-500",
		lightColor: "bg-red-100",
	},
];

export type Category = (typeof categories)[number];
export type CategoryId = Category["id"];
