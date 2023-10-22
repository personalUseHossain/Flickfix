
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(request) {
    const session = await getToken({ req: request })

    if (
        (request.nextUrl.pathname.startsWith('/series') ||
            request.nextUrl.pathname.startsWith('/movie') ||
            request.nextUrl.pathname.startsWith('/info')) &&
        session == null
    ) {
        const redirect = request.nextUrl.pathname
        return NextResponse.redirect(new URL(`/login?redirect=${redirect}`, request.url));
    }




    return NextResponse.next();
}

export const config = {
    matcher: ['/series/:path*', '/movie/:path*', '/info/:path*', '/login'],
};
