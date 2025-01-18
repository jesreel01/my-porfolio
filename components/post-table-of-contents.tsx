"use client"

import { FormattedPost } from "@/lib/contentlayer"
import clsx from "clsx"

const PostTableOfContents = ({
    headings,
  }: {
    headings: NonNullable<FormattedPost["headings"]>
  }) => {
  return (
    <div>PostTableOfContents</div>
  )
}

export default PostTableOfContents