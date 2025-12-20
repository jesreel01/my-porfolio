import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPostBySlug, getSerializedMDX, getAllBlogPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { CalendarIcon, ClockIcon } from "lucide-react";
import BlogPostPage from "./BlogPostPage";

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
  p: (props: any) => <p className="my-4 text-muted-foreground" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 my-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 my-4" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  a: (props: any) => <a className="text-primary hover:underline" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-muted pl-4 italic my-4" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6 text-sm" {...props} />
  ),
  code: (props: any) =>
    props.className ? (
      <code className={props.className + " px-1 py-0.5 bg-muted rounded text-sm"} {...props} />
    ) : (
      <code className="px-1 py-0.5 bg-muted rounded text-sm" {...props} />
    ),
};

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const ogImages = post.coverImage ? [post.coverImage] : [];

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ogImages,
    },
  };
}

async function getPost(slug: string) {
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return null;
  }

  const mdxSource = await getSerializedMDX(post.content);

  return {
    ...post,
    mdxSource,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
