import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogPostBySlug, getSerializedMDX, getAllBlogPosts } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { CalendarIcon, ClockIcon } from 'lucide-react';

// MDX components can be defined here
const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
  p: (props: any) => <p className="my-4 text-muted-foreground" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 my-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 my-4" {...props} />,
  li: (props: any) => <li className="mb-1" {...props} />,
  a: (props: any) => <a className="text-primary hover:underline" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-muted pl-4 italic my-4" {...props} />,
  pre: (props: any) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6 text-sm" {...props} />
  ),
  code: (props: any) => (
    props.className ? 
      <code className={props.className + " px-1 py-0.5 bg-muted rounded text-sm"} {...props} /> : 
      <code className="px-1 py-0.5 bg-muted rounded text-sm" {...props} />
  ),
};

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
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

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="pt-24 max-w-4xl mx-auto">
      {/* Header section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 bg-muted rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* MDX content */}
      <div className="prose prose-lg max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}
