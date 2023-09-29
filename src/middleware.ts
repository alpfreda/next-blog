import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { URLS } from './constants/consent'

// I will change here.
export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  const { doesMigrationExceeded } = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${URLS.MIGRATIONS}`)).json()

  if (request.nextUrl.pathname !== '/setup' && !doesMigrationExceeded) {
    return NextResponse.redirect(new URL('/setup', request.url))
  } else if (request.nextUrl.pathname === '/setup' && doesMigrationExceeded) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
