import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isAdminRoute = createRouteMatcher(['/admin(.*)'])
const isProtectedRoute = createRouteMatcher(['/checkout(.*)'])

export default clerkMiddleware(async (auth, req) => {
  // Protect all routes starting with `/admin`
  if (isAdminRoute(req) && (await auth()).sessionClaims?.metadata?.role !== 'admin') {
    const url = new URL('/', req.url)
    return NextResponse.redirect(url)
  }

  if (isProtectedRoute(req)) {
    const user = await auth()
    if (!user || !user.sessionClaims) {
      const loginUrl = new URL('/sign-in', req.url)
      
      // Pass the original page URL as a query param (so we can redirect back after login)
      loginUrl.searchParams.set('redirect_url', req.url)

      return NextResponse.redirect(loginUrl)
    }
  }
})
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
