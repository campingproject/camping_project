import { NextRequest, NextResponse } from 'next/server';

const HOST_SERVER = process.env.NEXT_PUBLIC_CLIENT_URL;

type Context = {
  params: { id: string };
};

export async function GET(_: NextRequest, context: Context) {
  const placeId = context.params.id;
  const res = await fetch(`${HOST_SERVER}/places/${placeId}`);
  const data = await res.json();

  return NextResponse.json(data);
}
