import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}