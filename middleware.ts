import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest, response: NextResponse) => {
  const cookie = request.cookies.get('userACT');

  // if (!request.url.includes('/login') && cookie === undefined) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // } else if (request.url.includes('/login') && cookie !== undefined) {
  //   return NextResponse.redirect(new URL('/', request.url));
  // } else

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
