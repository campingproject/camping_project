'use client';

import { Logo } from '@/components/Logo';
import { StyledMain } from './Login.styles';
import Link from 'next/link';
import { getProviders, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { kakaoIcon, naverIcon } from '@/public/svgs';
import LoginButton from '@/components/features/Login/LoginButton';

function Login({}) {
  // const { data: session } = useSession(); // 유저 로그인 시 생성되는 session data
  const [providers, setProviders] = useState(null);

  const handleKakao = async () => {
    const result = await signIn('kakao', {
      redirect: true, // 로그인 성공 시 callbackUrl로 이동
      callbackUrl: '/',
    });
  };

  const handleNaver = async () => {
    const result = await signIn('naver', {
      redirect: true, // 로그인 성공 시 callbackUrl로 이동
      callbackUrl: '/',
    });
  };

  useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      // console.log(res);
      setProviders(res);
    })();
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
