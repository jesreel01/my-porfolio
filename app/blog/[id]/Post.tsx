import React from "react";
import Link from "next/link";
import { ArrowLeftIcon as Left } from "@heroicons/react/24/outline";
import ScrollToTop from "@/components/scroll-to-top";
import Balancer from "react-wrap-balancer";
import clsx from "clsx";
// import LikeButton2 from "@/components/like-button2";
import { OOF_GRAD } from "@/lib/constants";

const Post = () => {
  return (
    <>
      <div className="mt-24 mb-4 xl:!col-end-5">
        <Link href="/" className="group inline-flex items-center space-x-2">
          <div className="transition rounded-full bg-rose-200/10 p-1 text-rose-200/80 group-hover:bg-rose-200/25 group-hover:text-rose-200">
            <Left className="w-4 group-hover:scale-125 transition-transform group-active:scale-110" />
          </div>
          <div className="mt-0.5 text-rose-200/70 group-hover:text-rose-200/90 transition">
            All Posts
          </div>
        </Link>

        <h1 className={clsx("mt-6 text-2xl font-medium sm:text-4xl", OOF_GRAD)}>
          {/* <Balancer>{post.title}</Balancer> */}
        </h1>

        <div className="mt-4 flex space-x-2 text-rose-200/50">
          {/* <div>{post.publishedAtFormatted}</div> */}
          <div className="text-rose-200/30">&middot;</div>
          {/* <PostMetrics slug={post.slug} /> */}
        </div>
      </div>

      <div className="sticky top-6 hidden h-0 xl:!col-start-4 xl:row-start-3 xl:block">
        <div className="space-y-6">
          {/* {post.headings ? (
            <>
              <PostTableOfContents headings={post.headings} />
              <div className="border-t-2 border-rose-200/5"></div>
            </>
          ) : null} */}

          <div className="flex items-center justify-between">
            {/* <LikeButton2 slug={post.slug} /> */}
            {/* TODO: Wire this up: <ScrollProgress /> */}

            <ScrollToTop>Back to top</ScrollToTop>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
