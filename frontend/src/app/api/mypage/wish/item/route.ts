import { NextResponse } from 'next/server';

const HOST_SERVER = 'http://localhost:3000';

export async function GET() {
  const res = await fetch(`${HOST_SERVER}/mypage/wish/item`);
  const data = await res.json();

  return NextResponse.json(data);
}
