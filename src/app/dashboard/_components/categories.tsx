import { Button } from "@/components/ui/button";
import { categories } from "@/lib/category";

export default function Categories() {
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
