import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

// const HOST_SERVER = 'https://api.campinggo.store';
const HOST_SERVER = process.env.NEXT_PUBLIC_SERVER_URL;

export async function GET(req: NextRequest) {
  try {
    const cookieStore = cookies();
    const cookie = cookieStore.getAll();
    console.log(cookie);
    const token = cookieStore.get('token');
    // const token: string | undefined = req.cookies.get('access_token')?.value;
    // const token = req.cookies.get('access_token');
    // const cookies: any = req.cookies.getAll();
    // console.log('cookies: ' + cookies);

    if (!token) {
      return NextResponse.json({ message: 'Access token not found' }, { status: 401 });
    }

    const res = await fetch(`${HOST_SERVER}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // 접근 토큰 값만 가져오기
    const { access_token } = await res.json();

    // 2. 토큰을 통해 로그인 유저의 데이터 가져와 로그인 처리하기
    const userDataResponse = await fetch('https://kapi.kakao.com/v2/user/me', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    });

    const userData = await userDataResponse.json();

    // 여기에서 userData를 사용하여 처리

    return NextResponse.json({ success: true, data: userData });
    // return NextResponse.json(userData);

    // if (!res.ok) {
    //   throw new Error(`Fetch failed with status: ${res.status} ${res.statusText}`);
    // }

    // const decodedToken = jwtDecode(token.toString());
    // // const data = await res.json();
    // console.log(decodedToken);

    // const data = await res.text();

    // return NextResponse.json({
    //   data,
    //   decodedToken,
    //   status: 200,
    // });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
