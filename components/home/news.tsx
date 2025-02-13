"use client";
import { getPost } from "@/service/blog";
import { changeDomain, changeDomainContent } from "@/util";
import { useQuery } from "@tanstack/react-query";
import _ from "lodash";
import moment from "moment";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const News = () => {
  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn: getPost,
  });
  return (
    <section className="hidden bg-white py-10 lg:block">
      <div className=" mx-auto px-4 lg:px-[10%]">
        <div className="mb-8 flex flex-col items-center justify-between lg:flex-row">
          <span className="text-4xl font-bold text-[#184475]">Tin tức DGN</span>
          <div className="mb-6 mt-7 flex flex-col items-center justify-between gap-5 lg:flex-row">
            <Link href={"blog"}>
              <button className="flex items-center rounded-full bg-[#507298] px-4 py-2 text-white transition-transform duration-300 hover:scale-105">
                <span className="mr-2">XEM TẤT CẢ</span>
                <FaArrowRight color="white" size={16} />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="w-full lg:w-1/2">
            {_.slice(postQuery?.data?.news, 1, 4).map((item, index) => (
              <Link href={`/blog/${item.slug}`}>
                <div
                  key={index}
                  className={`relative flex flex-col overflow-hidden rounded-lg lg:flex-row ${
                    index !== postQuery?.data?.news - 1 ? "mb-5" : ""
                  }`}
                >
                  <div className="p-4">
                    <h3 className=" mb-2 font-semibold lg:text-sm">
                      {item.title}
                    </h3>
                    <p className="mb-2 text-sm text-gray-500">{item.date}</p>
                    <p className="text-[.7rem]">
                      <span
                        className="line-clamp-3"
                        dangerouslySetInnerHTML={{
                          __html: changeDomainContent(item.content),
                        }}
                      ></span>
                    </p>
                  </div>
                  <img
                    src={changeDomain(item.thumnail)}
                    alt={item.title}
                    className="h-[200px] w-full rounded-lg object-cover lg:w-48"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="flex w-full flex-col lg:w-1/2">
            {postQuery?.data?.news && postQuery.data.news.length > 0 && (
              <Link href={`/blog/${postQuery.data.news?.[0].slug}`}>
                <div className="h-full overflow-hidden rounded-lg">
                  <img
                    src={changeDomain(postQuery?.data?.news?.[0]?.thumnail)}
                    className="w-full rounded-lg object-cover lg:h-[440px]"
                    alt={postQuery?.data?.news?.[0]?.title}
                  />
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold">
                      {postQuery.data.news[0].title}
                    </h3>
                    <p className="mb-2 text-sm text-gray-500">
                      {moment(postQuery.data.news[0].created_at).format(
                        "DD/MM/YYYY, HH:mm",
                      )}
                    </p>
                    <p className="text-sm">
                      <span
                        className="line-clamp-3"
                        dangerouslySetInnerHTML={{
                          __html: changeDomainContent(
                            postQuery?.data?.news?.[0]?.content,
                          ),
                        }}
                      ></span>
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
