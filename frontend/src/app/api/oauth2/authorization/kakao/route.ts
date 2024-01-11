// const handleKakao = async () => {
//   try {
//     await fetch(
//       `/api/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/login/redirect`,
//       {
//         method: 'GET',
//         credentials: 'include', // credentials 옵션을 추가하여 쿠키를 전송합니다.
//       },
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

import { NextRequest, NextResponse } from 'next/server';

const HOST_SERVER = 'http://localhost:3000';

type Context = {
  params: { id: string };
};

export async function GET(_: NextRequest, context: Context) {
  const res = await fetch(
    `${HOST_SERVER}/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/login/redirect`,
    {
      method: 'GET',
      credentials: 'include', // credentials 옵션을 추가하여 쿠키를 전송합니다.
    },
  );
  const data = await res.json();

  return NextResponse.json(data);
}

// import axios, { AxiosResponse } from 'axios';
// import { NextApiRequest, NextApiResponse } from 'next';

// export const finishKakaoLogin = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     // 1. 인가 코드를 이용해 토큰 받기
//     // 접근 토큰을 받기 위한 필수 파라미터를 포함한 baseUrl 만들기
//     const config = {
//       grant_type: 'authorization_code',
//       code: req.query.code as string,
//       client_id: process.env.KAKAO_CLIENT_ID!,
//       redirect_uri: process.env.KAKAO_REDIRECT_URI!,
//       client_secret: process.env.KAKAO_CLIENT_SECRET!,
//     };

//     const params = new URLSearchParams(config).toString();
//     const baseUrl = `https://kauth.kakao.com/oauth/token?${params}`;

//     // 토큰과 토큰 정보 요청하기
//     const response: AxiosResponse = await axios.post(baseUrl);

//     // 접근 토큰 값만 가져오기
//     const { access_token } = response.data;

//     // 2. 토큰을 통해 로그인 유저의 데이터 가져와 로그인 처리하기
//     const { data } = await axios.post(`https://kapi.kakao.com/v2/user/me`, null, {
//       headers: {
//         Authorization: `Bearer ${access_token}`,
//         'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
//       },
//     });

//     // 여기에서 data를 사용하여 처리

//     res.status(200).json({ success: true, data });
//   } catch (error) {
//     console.error('Error during Kakao login:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// };
