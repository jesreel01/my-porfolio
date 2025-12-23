import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
// Image metadata
export const alt = 'Jesreel - Software Engineer'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          {/* Logo Icon */}
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
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
          
          <h1
            style={{
              fontSize: 100,
              fontWeight: 'bold',
              color: 'black',
              letterSpacing: '-0.05em',
              marginLeft: 20,
            }}
          >
            Jesreel
          </h1>
        </div>
        
        <p
          style={{
            fontSize: 40,
            color: '#666',
            marginTop: 40,
            fontWeight: 500,
          }}
        >
          Full Stack Developer & Software Engineer
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
