'use client';

import { Logo } from '@/components/common/Logo';
import { StyledMain } from './Login.styles';
import Link from 'next/link';
import { kakaoIcon, naverIcon } from '@/public/svgs';
import { LoginButton } from '@/components/Login';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Login() {
  const router = useRouter();
  const handleKakao = async () => {
    try {
      // window.location.href = `${process.env.NEXT_PUBLIC_KAKAO_AUTH_LOGIN_URI}`;
      // window.location.href = 'http://43.200.131.69:9090/oauth2/authorization/kakao';
      // window.location.href = `http://43.200.131.69:9090/oauth2/authorization/kakao?redirect_uri=http://localhost:3000/login/redirect`;

      const response = await fetch(
        // `http://43.200.131.69:9090/oauth2/authorization/kakao`,
        `/oauth2/authorization/kakao`,
        {
          method: 'GET',
          credentials: 'include', // credentials 옵션을 추가하여 쿠키 전송
        },
      );
      console.log(response.headers);
    } catch (error) {
      console.log(error);
    }
  };
  const handleNaver = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_NAVER_AUTH_LOGIN_URI}`;
  };

  // 페이지 로딩 후 실행될 코드
  useEffect(() => {
    // 이 부분에서 로그인이 성공하면 리다이렉트 코드를 실행합니다.
    // if (window.location.pathname === '/login/redirect') {
    //   router.push('/');
    // }
  }, []);

  return (
    <StyledMain>
      <Logo />
      <h1>로그인</h1>
      <p>기존 계정으로 간편하게 로그인 하세요!</p>

      <section>
        <LoginButton
          onClick={handleKakao}
          className="kakao_login_button"
          iconSrc={kakaoIcon}
          iconAlt="icon_kakao"
          span="카카오계정으로 로그인"
        />
        <LoginButton
          onClick={handleNaver}
          className="naver_login_button"
          iconSrc={naverIcon}
          iconAlt="icon_naver"
          span="네이버 아이디로 로그인"
        />
        <Link href="#">회원가입 하기</Link>
      </section>
    </StyledMain>
  );
}
export default Login;
