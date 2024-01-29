import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  const token = request.cookies.get('access_token');
  // console.log(token); // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll();
  // const token: string | undefined = request.cookies.get('access_token')?.value as string;
  // console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]

  // Setting cookies on the response using the `ResponseCookies` API
  const response = NextResponse.next();
  // response.cookies.set({
  //   name: 'accessToken',
  //   value: token.value,
  //   path: '/',
  // });
  // response.cookies.set({
  //   name: 'accessToken',
  //   value: token,
  //   path: '/',
  // });
  // cookie = response.cookies.get('accessToken');
  // console.log(cookie); // => { name: 'vercel', value: 'fast', Path: '/' }
  // The outgoing response will have a `Set-Cookie:vercel=fast;path=/` header.

  return response;
}
