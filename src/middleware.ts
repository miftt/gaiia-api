import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// API key validation
const isValidApiKey = (apiKey: string) => {
  // In production, validate against your database or environment variables
  return apiKey === process.env.API_KEY
}

export function middleware(request: NextRequest) {
  // Only apply to API routes
  if (!request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  // Check for API version
  if (!request.nextUrl.pathname.startsWith('/api/v1')) {
    return NextResponse.json(
      { success: false, message: 'Invalid API version', error: 'Please use v1 of the API' },
      { status: 400 }
    )
  }

  // Get the authorization header
  const authHeader = request.headers.get('authorization')
  
  if (!authHeader) {
    return NextResponse.json(
      { success: false, message: 'Authentication required', error: 'Missing authorization header' },
      { status: 401 }
    )
  }

  // Check if it's a Bearer token
  const [bearer, token] = authHeader.split(' ')
  if (bearer !== 'Bearer' || !token) {
    return NextResponse.json(
      { success: false, message: 'Invalid authorization format', error: 'Authorization header must be in format: Bearer <token>' },
      { status: 401 }
    )
  }

  // Validate API key
  if (!isValidApiKey(token)) {
    return NextResponse.json(
      { success: false, message: 'Invalid API key', error: 'The provided API key is invalid' },
      { status: 401 }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
} 