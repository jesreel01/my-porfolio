import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const contentDirectory = path.join(process.cwd(), 'content');
const blogDirectory = path.join(contentDirectory, 'blog');

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  readTime: string;
  tags: string[];
  content: string;
};

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      readTime: data.readTime,
      tags: data.tags || [],
      content,
    };
  } catch (error) {
    console.error(`Error getting blog post ${slug}:`, error);
    return null;
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(blogDirectory)) {
      return [];
    }
    
    const fileNames = fs.readdirSync(blogDirectory);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => {
        // Remove ".mdx" from file name to get slug
        const slug = fileName.replace(/\.mdx$/, '');
        
        // Read file content
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Use gray-matter to parse the post metadata
        const { data, content } = matter(fileContents);
        
        return {
          slug,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          author: data.author,
          readTime: data.readTime,
          tags: data.tags || [],
          content,
        };
      })
      // Sort posts by date
      .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
    
    return allPostsData;
  } catch (error) {
    console.error('Error getting all blog posts:', error);
    return [];
  }
}

export async function getSerializedMDX(source: string) {
  const mdxSource = await serialize(source, {
    // Add options for MDX parsing if needed
    parseFrontmatter: true,
  });
  
  return mdxSource;
}
