import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const PostPreviewCard = ({ post } : {
  post: {
    title: string;
    excerpt: string;
    image: string;
    slug: string;
  };
}) => {
  
  return (
    <Link
      href={`/posts/`}
      className={cn(
        "block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium"
      )}
    >
      {/* <Image src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-t-2xl" /> */}
      <div className="p-4">
        <h2 className="text-xl font-bold">Title</h2>
        <p className="text-sm text-gray-500">excerpt</p>
        <span className="text-blue-500 hover:underline">Read more</span>
      </div>
    </Link>
  );
};

export default PostPreviewCard;