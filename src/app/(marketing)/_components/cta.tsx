import { Button } from "@/components/ui/button";

export default function CTA() {
	return (
		<div className="text-center flex flex-col items-center justify-center">
			<h3 className="text-4xl font-bold max-w-2xl mx-auto">
				Ready to Transform Your Projects or Jumpstart Your Freelance Journey?
			</h3>

			<p className="text-lg text-muted-foreground mt-4 max-w-lg mx-auto">
				IndieGig is your one-stop platform for freelance success.
			</p>

			<div className="flex gap-6 mt-6">
				<Button>Hire Freelancers</Button>
				<Button variant="outline">Start Freelancing</Button>
			</div>
		</div>
	);
}
