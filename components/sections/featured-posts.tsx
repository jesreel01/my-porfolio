import React from "react";
import PostPreviewCard from "../post-preview-card";
import Link from "next/link";

const FeaturedPosts = () => {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-medium">Featured Posts</h2>
      <div className="mt-6 space-y-8">
        {/* <PostPreviewCard />
        <PostPreviewCard />
        <PostPreviewCard />
        <PostPreviewCard /> */}
        <div className="py-10 text-center text-rose-100/60 w-full">
          <p>No posts yet.</p>
        </div>
      </div>

      <div className="mt-5 text-rose-100/80">
        <Link href="/projects">Read all posts</Link>
      </div>
    </section>
  );
};

export default FeaturedPosts;
