"use client";

import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { GigCard } from "@/components/gig-card";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/lib/category";
import { UploadButton } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { createGigSchema } from "@/server/api/schema/user";
import { api } from "@/trpc/react";

const formSchema = createGigSchema;

export default function Page() {
	const router = useRouter();
	const user = useUser();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			description: "",
			price: 1,
			category: "web-development",
		},
	});

	const createGig = api.user.createGig.useMutation({
		onSuccess: () => {
			toast.success("Gig created successfully");
			router.push("/dashboard");
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		createGig.mutate(values);
	};

	const gigTitle = form.watch("title");
	const gigPrice = form.watch("price");
	const gigImageUrl = form.watch("imageUrl");

	return (
		<div className="grid lg:grid-cols-2 gap-6 container mx-auto py-6">
			<div className="space-y-6">
				<h2 className="text-2xl font-semibold">Create a Gig</h2>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex items-center gap-x-2">
										Title{" "}
										<span className="text-xs text-muted-foreground">
											(min 12 characters)
										</span>
									</FormLabel>
									<FormControl>
										<Input placeholder="" {...field} />
									</FormControl>
									<FormDescription className="flex items-center gap-x-2">
										Title of your gig.
										<span
											className={cn(
												"ml-auto text-xs text-muted-foreground",
												field.value.length > 100 || field.value.length < 12
													? "text-red-500"
													: "text-green-500",
											)}
										>
											{field.value.length} / 100
										</span>
									</FormDescription>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex items-center gap-x-2">
										Description{" "}
										<span className="text-xs text-muted-foreground">
											(min 100 characters)
										</span>
									</FormLabel>
									<FormControl>
										<Textarea
											placeholder=""
											{...field}
											className="min-h-[100px]"
										/>
									</FormControl>
									<FormDescription className="flex items-center gap-x-2">
										Describe your gig in a few words.
										<span
											className={cn(
												"ml-auto text-xs text-muted-foreground",
												field.value.length > 1000 || field.value.length < 100
													? "text-red-500"
													: "text-green-500",
											)}
										>
											{field.value.length} / 1000
										</span>
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="price"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Price</FormLabel>
									<FormControl>
										<Input
											placeholder=""
											type="number"
											{...field}
											onChange={(e) => {
												const value = e.target.valueAsNumber;
												field.onChange(value);
											}}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="category"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Category</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a verified email to display" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{categories.map((category) => (
												<SelectItem key={category.id} value={category.id}>
													{category.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="flex flex-col gap-2">
							<FormLabel>Upload Image</FormLabel>
							<UploadButton
								endpoint="imageUploader"
								onClientUploadComplete={(res) => {
									const imgUrl = res?.[0]?.url;
									if (imgUrl) {
										form.setValue("imageUrl", imgUrl);
									}
								}}
								onUploadError={(error: Error) => {
									console.log(error);
								}}
							/>
						</div>

						<div className="flex justify-end">
							<Button
								type="submit"
								disabled={createGig.isPending || !form.formState.isValid}
							>
								{createGig.isPending ? "Creating..." : "Submit"}
							</Button>
						</div>
					</form>
				</Form>
			</div>

			<div className="flex flex-col gap-6">
				<h2 className="text-2xl font-semibold">Preview</h2>
				<GigCard
					title={gigTitle}
					price={gigPrice}
					imageUrl={gigImageUrl}
					creator={{
						name: user.user?.fullName ?? "User",
						imageUrl: user.user?.imageUrl,
					}}
				/>
			</div>
		</div>
	);
}
