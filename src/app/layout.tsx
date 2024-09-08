import "@/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import TRPCProvider from "@/components/trpc-provider";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
	title: "IndieGig",
	description:
		"IndieGig is a platform for developers to find gigs and work together on projects as well as companies to find developers for their projects.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<ClerkProvider>
			<html lang="en" className={`${GeistSans.variable}`}>
				<body>
					<TRPCReactProvider>
						<TRPCProvider>
							<ThemeProvider
								attribute="class"
								defaultTheme="system"
								forcedTheme="dark"
								enableSystem
								disableTransitionOnChange
							>
								<Navbar />
								{children}
							</ThemeProvider>
						</TRPCProvider>
					</TRPCReactProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
