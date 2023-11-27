'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function OauthRedirectHandler() {
  const router = useRouter();
  useEffect(() => {
    const kakaoRedirectUrl = sessionStorage.getItem('kakaoRedirectUrl');
    if (kakaoRedirectUrl) {
      // 인가 코드
      const code = new URL(window.location.href).searchParams.get('code');
      console.log(code);
      // login process
      router.push(kakaoRedirectUrl);
    }
  });

  return <div>OauthRedirectHandler</div>;
}
export default OauthRedirectHandler;
