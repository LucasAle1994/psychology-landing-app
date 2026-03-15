import { type NextRequest } from 'next/server';

export function middleware(_request: NextRequest) {
  return undefined;
}

export const config = {
  matcher: ['/:path*'],
};
