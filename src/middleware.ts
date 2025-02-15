import {NextRequest, NextResponse} from "next/server";
// import {json} from "node:stream/consumers";
// import {responseCookiesToRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const middleware = async (request: NextRequest) => {
    console.log('middleware request');
    // const login = request.cookies.get('login');
    // const password = request.cookies.get('password');

//     const token = await fetch('', {
//         method: "POST",
//         body: JSON.stringify({
//             key1: login,
//             key2: password,
//         }),
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//     }).then(value => value.json());
// }
//     const token = '4567hjkl';
//
//     const response = NextResponse.next({
//         headers:{
//             Authorisation: token
//         }
//     });
//
//     return response;
    return new NextResponse('dsa', {headers: {'mmm': 'pppp'}})
}

export const config = {
    matcher: '/auth'
}