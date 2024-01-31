import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, _: NextResponse) {
  try {
    // 1. 인가 코드를 이용해 토큰 받기
    const code = new URL(req.url).searchParams.get('code'); // code 추출

    const config = {
      grant_type: 'authorization_code',
      code: String(code),
      client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!,
      redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI!,
      client_secret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
    };
    const params = new URLSearchParams(config);
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

    return NextResponse.json({ success: true, data: userData });
  } catch (error) {
    console.error('Error during Kakao login:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' });
  }
}
