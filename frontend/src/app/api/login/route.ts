import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { NextApiRequest, NextApiResponse } from 'next';
import { redirect } from 'next/navigation';

// const HOST_SERVER = 'https://api.campinggo.store';
const HOST_SERVER = process.env.NEXT_PUBLIC_SERVER_URL;

export async function GET(req: NextRequest) {
  try {
    const token: string | undefined = req.cookies.get('access_token')?.value;
    // const token = req.cookies.get('access_token');
    const cookies: any = req.cookies.getAll();
    console.log(req);

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

    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status} ${res.statusText}`);
    }

    const decodedToken = jwtDecode(token.toString());
    // // const data = await res.json();
    // console.log(decodedToken);

    const data = await res.text();

    return NextResponse.json({
      data,
      decodedToken,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
