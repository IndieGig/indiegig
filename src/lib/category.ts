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
	},
	{
		id: "mobile-development",
		name: "Mobile Development",
		description: "Find mobile developers for your project.",
		icon: Smartphone,
	},
	{
		id: "bot-development",
		name: "Bot Development",
		description: "Find bot developers for your project.",
		icon: Bot,
	},
	{
		id: "ui-ux-design",
		name: "UI/UX Design",
		description: "Find UI/UX designers for your project.",
		icon: Palette,
	},
	{
		id: "graphic-design",
		name: "Graphic Design",
		description: "Find graphic designers for your project.",
		icon: PenTool,
	},
	{
		id: "content-creation",
		name: "Content Creation",
		description: "Find content creators for your project.",
		icon: Video,
	},
	{
		id: "marketing",
		name: "Marketing",
		description: "Find marketing experts for your project.",
		icon: Megaphone,
	},
];

export type Category = (typeof categories)[number];
export type CategoryId = Category["id"];
