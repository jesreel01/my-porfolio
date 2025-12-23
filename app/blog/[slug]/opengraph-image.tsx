import { ImageResponse } from 'next/og'
import { getBlogPostBySlug } from '@/lib/mdx'
 
export const alt = 'Blog Post Image'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)
  const title = post?.title || 'Blog Post'
  
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: 80,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
            <rect width="100" height="100" rx="20" fill="black" />
             <path
              d="M20 30L40 50L20 70"
              stroke="white"
              strokeWidth="8"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
            <rect x="50" y="62" width="20" height="8" fill="white" />
            <rect
              x="80"
              y="30"
              width="15"
              height="40"
              stroke="white"
              strokeWidth="6"
              fill="none"
            />
          </svg>
          <span style={{ fontSize: 40, fontWeight: 'bold', letterSpacing: '-0.02em' }}>
            Jesreel
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {post?.tags && post.tags.length > 0 && (
             <div style={{ display: 'flex', gap: 10 }}>
              {post.tags.slice(0, 3).map((tag) => (
                <div
                  key={tag}
                  style={{
                    background: '#f4f4f5',
                    padding: '8px 16px',
                    borderRadius: 20,
                    fontSize: 20,
                    color: '#52525b',
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
          
          <h1
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: 'black',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            {title}
          </h1>
          
          <p style={{ fontSize: 30, color: '#71717a', margin: 0, marginTop: 10 }}>
            {post?.date} · {post?.readTime}
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
