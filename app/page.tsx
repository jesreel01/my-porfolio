import BlogPosts from "@/components/BlogPosts";
import BlogPostHome from "@/components/BlogPostHome";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { getFeaturedBlogPosts } from "@/lib/mdx";
import Image from "next/image";

export default async function Home() {
  const featuredPosts = await getFeaturedBlogPosts();
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Hero/>
      <Projects className="mb-12 lg:mb-16" />
      <BlogPostHome posts={featuredPosts}/>
   </div>
  );
}
