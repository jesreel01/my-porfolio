import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const PostPreviewCard = () => {
  return (
    <Link
      href=""
      className={cn(
        "block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium"
      )}
    >
      Testing lang
    </Link>
  );
};

export default PostPreviewCard;
