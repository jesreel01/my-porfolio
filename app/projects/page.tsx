import PostPreviewCard from '@/components/post-preview-card'
import React from 'react'

const page = () => {
  return (
    <div className="mt-8 ">
    <h1 className="text-4xl font-medium tracking-wide">Project</h1>
    <div className="mt-6 space-y-8">
      <PostPreviewCard />
      <PostPreviewCard />
      <PostPreviewCard />
      <PostPreviewCard />
    </div>
  </div>
  )
}

export default page