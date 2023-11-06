import { NextRequest, NextResponse } from 'next/server';

const HOST_SERVER = 'http://localhost:3000';

type Context = {
  params: { id: string };
};

export async function GET(_: NextRequest, context: Context) {
  const userId = context.params.id;
  const res = await fetch(`${HOST_SERVER}/user/${userId}`);
  const data = await res.json();

  return NextResponse.json(data);
}
