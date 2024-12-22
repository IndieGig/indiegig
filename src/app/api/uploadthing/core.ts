import { type FileRouter, createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
	imageUploader: f({
		image: {
			maxFileSize: "4MB",
			maxFileCount: 1,
		},
	}).onUploadComplete(async ({ metadata, file }) => {
		return { url: file.url };
	}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
