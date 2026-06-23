import { type NextRequest, NextResponse } from 'next/server';

// The site is temporarily closed. Every page route is redirected to the home
// page, which renders only the maintenance placeholder. All pages remain in the
// codebase but are unreachable while this middleware is active.
// To restore the site, delete this file (and flip MAINTENANCE_MODE in layout.tsx).
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = '/';
  url.search = '';
  return NextResponse.redirect(url);
}

export const config = {
  // Match every path except Next internals, the API and static assets
  // (anything containing a dot, e.g. icon.png, *.svg, *.png).
  matcher: ['/((?!_next|api|images|.*\\..*).*)'],
};
