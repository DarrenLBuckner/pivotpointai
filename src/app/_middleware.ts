import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirect /404 to custom 404 page
  if (request.nextUrl.pathname === '/404') {
    return NextResponse.rewrite(new URL('/_404', request.url));
  }
  return NextResponse.next();
}
