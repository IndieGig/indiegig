"use client";

import {
	ArrowLeft,
	Clock,
	Loader2,
	MessageSquare,
	Share2,
	ShieldCheck,
	Star,
	User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";

export default function GigDetails() {
	const params = useParams();
	const id = params.id as string;

	const { data: gig, isLoading } = api.gigs.getGigById.useQuery({
		id: parseInt(id),
	});

	if (!gig && !isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center text-xl">
				Gig not found
			</div>
		);
	}

	if (isLoading || !gig) {
		return (
			<div className="min-h-screen flex items-center justify-center text-xl">
				<Loader2 className="w-4 h-4 mr-2 animate-spin" />
				Loading...
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-background text-foreground">
			<header className="py-4">
				<div className="max-w-7xl mx-auto px-4">
					<Link
						href="/dashboard"
						className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50"
						aria-label="Back to Gigs"
					>
						<ArrowLeft className="w-4 h-4 mr-1" />
						Back to Gigs
					</Link>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 pb-6 pt-0">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<article className="lg:col-span-2">
						<h1 className="text-4xl font-extrabold mb-6">{gig.title}</h1>

						<div className="flex items-center mb-8">
							<Avatar className="w-12 h-12">
								<AvatarImage
									src={gig.user?.imageUrl ?? ""}
									alt={gig.user?.username || "User"}
								/>
								<AvatarFallback className="text-xl">
									{gig.user?.username
										? gig.user.username.slice(0, 2).toUpperCase()
										: "NA"}
								</AvatarFallback>
							</Avatar>
							<div className="ml-4">
								<p className="font-semibold">{gig.user?.username}</p>
								<div className="flex items-center text-sm text-muted-foreground">
									<Star className="w-4 h-4 text-yellow-400 mr-1" />
									<span>No rating</span>
									<span className="mx-1">•</span>
									<span>No reviews yet</span>
								</div>
							</div>
						</div>

						<div className="relative w-full aspect-video lg:aspect-auto lg:h-[400px] rounded-lg overflow-hidden mb-8 border border-border">
							<Image
								src={gig.imageUrl}
								alt={gig.title}
								fill
								className="object-cover transition-transform duration-500 hover:scale-105"
							/>
						</div>

						<section className="bg-card p-8 rounded-lg border border-border shadow-sm">
							<h2 className="text-2xl font-semibold mb-4">About This Gig</h2>
							<ReactMarkdown className="prose prose-invert max-w-none">
								{gig.description.replace(/\n\s*\n\s*\n/g, "\n\n")}
							</ReactMarkdown>
						</section>
					</article>

					<aside className="lg:col-span-1">
						<div className="bg-card p-6 rounded-lg border border-border sticky top-8 shadow-md">
							<div className="mb-6">
								<h3 className="text-xl font-semibold mb-2">Standard Package</h3>
								<p className="text-3xl font-bold">
									{gig.price.toLocaleString("en-IN", {
										style: "currency",
										currency: "INR",
									})}
								</p>
							</div>

							<div className="space-y-4 mb-6">
								<div className="flex items-center text-sm text-muted-foreground">
									<Clock className="w-4 h-4 mr-2" />
									<span>1h response time</span>
								</div>
								<div className="flex items-center text-sm text-muted-foreground">
									<User className="w-4 h-4 mr-2" />
									<span>Dedicated support</span>
								</div>
								<div className="flex items-center text-sm text-muted-foreground">
									<ShieldCheck className="w-4 h-4 mr-2" />
									<span>100% satisfaction guaranteed</span>
								</div>
							</div>

							<div className="space-y-4 flex flex-col">
								<Button>Continue (${gig.price})</Button>
								<Button variant="outline">
									<MessageSquare className="w-4 h-4 mr-2" />
									Contact Seller
								</Button>
								<Button
									variant="outline"
									onClick={() => {
										navigator.clipboard.writeText(window.location.href);
										toast.success("Link copied to clipboard");
									}}
								>
									<Share2 className="w-4 h-4 mr-2" />
									Share Gig
								</Button>
							</div>
						</div>
					</aside>
				</div>
			</main>
		</div>
	);
}
