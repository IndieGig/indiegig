import { Button } from "@/components/ui/button";
import {
	Code2,
	Megaphone,
	Palette,
	PenTool,
	Smartphone,
	Video,
} from "lucide-react";

export default function Categories() {
	const categories = [
		{
			name: "Web Development",
			description: "Find web developers for your project.",
			icon: Code2,
			color: "bg-blue-500",
			lightColor: "bg-blue-100",
		},
		{
			name: "Mobile Development",
			description: "Find mobile developers for your project.",
			icon: Smartphone,
			color: "bg-purple-500",
			lightColor: "bg-purple-100",
		},
		{
			name: "UI/UX Design",
			description: "Find UI/UX designers for your project.",
			icon: Palette,
			color: "bg-pink-500",
			lightColor: "bg-pink-100",
		},
		{
			name: "Graphic Design",
			description: "Find graphic designers for your project.",
			icon: PenTool,
			color: "bg-orange-500",
			lightColor: "bg-orange-100",
		},
		{
			name: "Content Creation",
			description: "Find content creators for your project.",
			icon: Video,
			color: "bg-green-500",
			lightColor: "bg-green-100",
		},
		{
			name: "Marketing",
			description: "Find marketing experts for your project.",
			icon: Megaphone,
			color: "bg-red-500",
			lightColor: "bg-red-100",
		},
	];

	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<h2 className="text-2xl font-semibold">Recommended Categories</h2>
			</div>

			<div className="grid grid-cols-3 gap-4 lg:grid-cols-3">
				{categories.map((category, index) => (
					<div
						key={index}
						className={`group flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-x-4 rounded-lg border p-4 transition-colors hover:${category.lightColor}`}
					>
						<div
							className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-md ${category.color}`}
						>
							<category.icon className="h-6 w-6 text-white" />
						</div>
						<div className="space-y-1 text-center lg:text-left">
							<h3 className="font-medium text-sm lg:text-base leading-none">
								{category.name}
							</h3>
							<p className="text-sm text-muted-foreground hidden lg:block">
								{category.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
