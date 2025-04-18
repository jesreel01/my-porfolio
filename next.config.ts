import createMDX from '@next/mdx'
import type { NextConfig } from "next";

const withMDX = createMDX({
  // By default only the .mdx extension is supported
  extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
