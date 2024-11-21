import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export const middleware = async (request: NextRequest) => {
  const cookie = request.cookies.get('userACT');

  console.log("middleware 동작");

  if (!request.url.includes('/login') && cookie === undefined) {
    return NextResponse.redirect(new URL('/login', request.url));
  } else if (request.url.includes('/login') && cookie !== undefined) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
};
