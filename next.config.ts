import createMDX from '@next/mdx'
import type { NextConfig } from "next";

const withMDX = createMDX({
  // By default only the .mdx extension is supported
  extension: /\.mdx?$/,
})

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  output: 'standalone'
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
