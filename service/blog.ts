import { httpClient } from "@/auth/httpClient";

export const getBlogs = async () => {
  const { data } = await httpClient.get("/categories?type=NEWS&short_name=TT");
  return data;
};
export const getBlogDetail = async ({ queryKey }: { queryKey: any }) => {
  const [_, query] = queryKey;
  const { data } = await httpClient.get(`/news/${query.slug}`);
  return data;
};
