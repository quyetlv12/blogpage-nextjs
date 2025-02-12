"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";
import TopBar from "@/components/topBar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={`min-h-screen bg-[#FCFCFC] dark:bg-black ${inter.className}`}
      >
        <QueryClientProvider client={queryClient}>
          <Providers>
            <Toaster />
            <NextTopLoader />
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </QueryClientProvider>
      </body>
    </html>
  );
}
