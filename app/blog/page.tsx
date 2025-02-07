import BlogList from "@/components/Blog/blogList";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Blog | Tin tức",
  description: "Cập nhật những tin tức mới nhất về công nghệ và lập trình",
  openGraph: {
    title: "Blog | Tin tức",
    description: "Cập nhật những tin tức mới nhất về công nghệ và lập trình",
    type: "website",
  },
};

const Blog: NextPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tin tức"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <BlogList />
    </>
  );
};
export default Blog;
