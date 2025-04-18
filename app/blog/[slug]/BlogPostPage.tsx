import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPostBySlug, getSerializedMDX, getAllBlogPosts, BlogPost } from "@/lib/mdx";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { CopyButton } from "@/components/CopyButton";

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
  pre: ({ children, ...props }: { children: React.ReactNode } & React.HTMLAttributes<HTMLPreElement>) => {
    let codeContent = '';
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && 'props' in child) {
        const codeChild = child as { props: { children?: string } };
        if (typeof codeChild.props.children === 'string') {
          codeContent = codeChild.props.children;
        }
      }
    });
    
    return (
      <div className="relative">
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6 text-sm" {...props}>
          {children}
        </pre>
        <CopyButton text={codeContent} />
      </div>
    );
  },
  code: (props: any) =>
    props.className ? (
      <code className={props.className + " px-1 py-0.5 bg-muted rounded text-sm"} {...props} />
    ) : (
      <code className="px-1 py-0.5 bg-muted rounded text-sm" {...props} />
    ),
};

export default async function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <article>
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
          {post.tags.map((tag) => (
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
