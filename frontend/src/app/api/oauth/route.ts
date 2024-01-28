import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

// const HOST_SERVER = 'https://localhost:3001';
// const HOST_SERVER = 'https://api.campinggo.store';

// export async function GET(request: Request) {
// const cookieStore = cookies();
// const token = cookieStore.get('access_token');
//   // console.log(token);
//   const cookie = cookieStore.getAll();
//   console.log(cookie);
//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: { 'Set-Cookie': `token=${token?.value}` },
//   });
// }

// export async function GET(req: NextRequest) {
//   try {
//     const token: string | undefined = req.cookies.get('access_token')?.value;
//     const cookies: any = req.cookies.getAll();
//     console.log(cookies);

//     if (!token) {
//       return NextResponse.json({ message: 'Access token not found' }, { status: 401 });
//     }

//     const res = await fetch('https://api.campinggo.store/oauth2/authorization/kakao', {
//       method: 'GET',
//       credentials: 'include',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Cookie: `access_token=${token}`,
//       },
//     });

//     if (!res.ok) {
//       throw new Error(`Fetch failed with status: ${res.status} ${res.statusText}`);
//     }

//     const decodedToken = jwtDecode(token);
//     // const data = await res.json();

//     return NextResponse.json({
//       res,
//       decodedToken,
//       status: 200,
//       headers: { 'Set-Cookie': `access_token=${token}` },
//     });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
//   }
// }

export async function GET(req: NextRequest) {
  try {
    // const token: string | undefined = req.cookies.get('access_token')?.value;
    // const token = req.cookies.get('access_token');
    // const cookies: any = req.cookies.getAll();
    // console.log(cookies);

    // if (!token) {
    //   return NextResponse.json({ message: 'Access token not found' }, { status: 401 });
    // }

    console.log(document.cookie);

    const res = await fetch('https://api.campinggo.store', {
      method: 'GET',
      credentials: 'include',
    });

    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status} ${res.statusText}`);
    }

    // const decodedToken = jwtDecode(token);
    // const data = await res.json();
    const data = await res.text();

    return NextResponse.json({
      data,
      // decodedToken,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

// export async function GET(request: Request) {
//   const res = await fetch('https://api.campinggo.store', {
//     method: 'GET',
//     credentials: 'include',
//   });
//   const data = await res.json();

//   // return Response.json(res);
//   return Response.json({ data });
// }

// export async function GET(req: NextRequest) {
//   try {
//     const token: string | undefined = req.cookies.get('access_token')?.value;
//     const cookies: any = req.cookies.getAll();
//     console.log(cookies);

//     if (!token) {
//       return NextResponse.json({ message: 'Access token not found' }, { status: 401 });
//     }

//     const res = await fetch('https://api.campinggo.store', {
//       method: 'GET',
//       credentials: 'include',
//       headers: {
//         // Authorization: `Bearer ${token}`,
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         // Cookie: `access_token=${token}`,
//       },
//     });

//     if (!res.ok) {
//       throw new Error(`Fetch failed with status: ${res.status} ${res.statusText}`);
//     }

//     const decodedToken = jwtDecode(token);
//     // const data = await res.json();
//     const data = await res.text();

//     return NextResponse.json({
//       data,
//       decodedToken,
//       status: 200,
//     });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
//   }
// }
