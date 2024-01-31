import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, _: NextResponse) {
  try {
    // 접근 토큰 추출
    const token = new URL(req.url).searchParams.get('token');

    const response = await fetch('https://openapi.naver.com/v1/nid/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error during API request:', error);
    return NextResponse.json(error);
  }
}
