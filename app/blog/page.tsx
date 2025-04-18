import { getAllBlogPosts } from '@/lib/mdx';
import BlogPage from './BlogPage';

export default async function Page() {

  const posts = await getAllBlogPosts();

  return <BlogPage posts={posts} />;
}
