import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';

const HOST_SERVER = 'https://api.campinggo.store';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // 1. 인가 코드를 이용해 토큰 받기
    // const { code } = req.body;
    const config = {
      grant_type: 'authorization_code',
      // code: req.body.code as string,
      // code,
      // client_id: process.env.KAKAO_CLIENT_ID!,
      client_id: 'aba6bffe80f7500363f86226beda4b2b',
      // redirect_uri: process.env.KAKAO_REDIRECT_URI!,
      redirect_uri: 'https://localhost:3001/login/redirect',
      // client_secret: process.env.KAKAO_CLIENT_SECRET!,
      client_secret: '0f01eOFo462AQkVfGL5Ur8AGKAFxdYpL',
    };
    const params = new URLSearchParams(config).toString();
    const baseUrl = `https://kauth.kakao.com/oauth/token?${params}`;

    // fetch를 사용하여 토큰과 토큰 정보 요청하기
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    // 접근 토큰 값만 가져오기
    const { access_token } = await response.json();

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

    // return NextResponse.json({ success: true, data: userData });
    return NextResponse.json(userData);
  } catch (error) {
    console.error('Error during Kakao login:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' });
  }
}
