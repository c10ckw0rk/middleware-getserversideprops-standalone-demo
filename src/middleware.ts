import {NextRequest, NextResponse} from "next/server";

export async function middleware(request: NextRequest) {
    const routes = await fetchRouteData();
    const contentType = routes[request.nextUrl.pathname.split('/')[1]];
    const url = `${request.nextUrl.origin}/content-types/${contentType}`;
    return NextResponse.rewrite(new URL(url, request.url));
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico|content-types/).*)',
};

// simulating fetch to cms to get routes and associated templates
async function fetchRouteData() {
    return await new Promise((res) => {
        setTimeout(() => {
            res({
                'some-random-pathname-1': 'contenttype-a',
                'some-random-pathname-2': 'contenttype-b',
                'some-random-pathname-3': 'contenttype-c',
                'some-random-pathname-4': 'contenttype-d',
                'some-random-pathname-5': 'contenttype-a',
                'some-random-pathname-6': 'contenttype-b',
                'some-random-pathname-7': 'contenttype-c',
                'some-random-pathname-8': 'contenttype-d',
                'some-random-pathname-9': 'contenttype-a',
                'some-random-pathname-10': 'contenttype-b'
            })
        }, 200)
    })
}
