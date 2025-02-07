"use client";

import { getBlogs } from "@/service/blog";
import { useQuery } from "@tanstack/react-query";
import { SkeletonCard } from "../SkeletonCard";
import SingleBlog from "./SingleBlog";
import { motion } from "framer-motion";
const BlogList = () => {
  const blogQuery = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="pb-[120px] pt-[70px]">
        <div className="container">
          {blogQuery?.isLoading ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : (
            <div className="-mx-4 flex flex-wrap justify-center">
              {blogQuery?.data?.news?.map((blog) => (
                <div
                  key={blog.id}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                >
                  <SingleBlog blog={blog} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default BlogList;
