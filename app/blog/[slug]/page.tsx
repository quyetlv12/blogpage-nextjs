import BlogData from "@/components/Blog/blogData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Detail | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Detail Page for Startup Nextjs Template",
};

export default function DetailBlog({ params }: { params: { slug: string } }) {
  return (
    <>
      <BlogData params={params} />
    </>
  );
}
