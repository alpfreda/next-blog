import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// I will change here.
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  return response
}
