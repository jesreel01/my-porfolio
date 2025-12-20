import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPostBySlug, getSerializedMDX, getAllBlogPosts, BlogPost } from "@/lib/mdx";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { CopyButton } from "@/components/CopyButton";
import rehypePrettyCode from "rehype-pretty-code";
import { rehypePreRaw } from "@/lib/rehype-pre-raw";

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
  pre: ({ children, raw, ...props }: any) => {
    const language = props['data-language'];
    const codeText = raw || '';
    return (
      <div className="relative rounded-xl overflow-hidden my-6 border border-zinc-700/50">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e] border-b border-zinc-700/30">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <div className="flex-1" />
          <div className="flex items-center gap-1">
            {language && (
              <span className="text-xs font-mono text-zinc-400 select-none uppercase">
                {language}
              </span>
            )}
            <CopyButton text={codeText} />
          </div>
        </div>
        <pre className="p-6 overflow-x-auto text-sm" {...props}>
          {children}
        </pre>
      </div>
    );
  },
  code: (props: any) => {
    const isInPre = props.className?.includes('language-') || props['data-language'];
    if (isInPre) {
      return <code className={props.className} {...props} />;
    }
    return <code className="px-1 py-0.5 bg-muted rounded text-sm" {...props} />;
  },
};

export default async function BlogPostPage({ post }: { post: BlogPost }) {
  if (!post) {
    return <div>Post not found</div>;
  }

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

        {post.coverImage && (
          <div className="mb-8 rounded-xl overflow-hidden aspect-video relative">
            <img
              src={post.coverImage}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <MDXRemote
          source={post.content}
          components={components}
          options={{
            mdxOptions: {
              rehypePlugins: [
                rehypePreRaw,
                [rehypePrettyCode, {
                  theme: 'github-dark',
                  keepBackground: true,
                }],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
