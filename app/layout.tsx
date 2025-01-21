"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Providers } from "./providers";

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
      <body className={`bg-[#FCFCFC] dark:bg-black min-h-screen ${inter.className}`}>
        <QueryClientProvider client={queryClient}>
          <Providers>
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
