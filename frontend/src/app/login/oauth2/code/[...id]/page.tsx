'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import axios from 'axios';

function OauthRedirectedPage() {
  const router = useRouter();
  // const code = new URL(window.location.href).searchParams.get('code');
  const handleKakaoLogin = async () => {
    try {
      // 서버로 API 요청을 보냄
      const response = await axios.get('/api/login', {
        params: {
          code: new URL(window.location.href).searchParams.get('code'),
        },
      });

      // 서버에서 처리된 데이터를 사용
      console.log(response.data);

      // 로그인 성공 시 메인(홈) 화면으로 이동
      router.push('/');
    } catch (error) {
      console.error('Error during login:', error);
      // 오류 처리
    }
  };
  useEffect(() => {
    handleKakaoLogin();
  }, []);

  return <div>OauthRedirectedPage... 로그인 중입니다.</div>;
}
export default OauthRedirectedPage;
