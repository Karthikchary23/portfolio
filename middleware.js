import { NextResponse } from 'next/server'
 
export function middleware(request) {
    console.log("hello");
  return NextResponse.redirect(new URL('/home', request.url))

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}