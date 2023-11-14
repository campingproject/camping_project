'use client';

import { Logo } from '@/components/Logo';
import { StyledMain } from './Login.styles';
import Link from 'next/link';
import Image from 'next/image';
import { kakaoIcon, naverIcon } from '@/public/svgs';
import { getProviders, signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

function Login({}) {
  const { data: session } = useSession();
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
        <button onClick={handleKakao} className="kakao_login_button">
          <Image src={kakaoIcon} width={37} height={37} alt="icon_kakao" />
          <span>카카오계정으로 로그인</span>
        </button>

        <button onClick={handleNaver} className="naver_login_button">
          <Image src={naverIcon} width={30} height={30} alt="icon_naver" />
          <span>네이버 아이디로 로그인</span>
        </button>

        <Link href="#">회원가입 하기</Link>
      </section>
    </StyledMain>
  );
}
export default Login;
