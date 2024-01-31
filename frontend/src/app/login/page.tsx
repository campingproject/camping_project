'use client';

import { Logo } from '@/components/common/Logo';
import { StyledMain } from './Login.styles';
import Link from 'next/link';
import { kakaoIcon, naverIcon } from '@/public/svgs';
import LoginButton from '@/components/Login/LoginButton';
import NaverLogin from '@/components/Login/NaverLogin/NaverLogin';

function Login() {
  // const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY!;
  // const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI!;

  // const kakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakao = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_KAKAO_AUTH_LOGIN_URI}`;
    // window.location.href = kakaoLoginURL;
  };

  const handleNaver = () => {
    // window.location.href = `${process.env.NEXT_PUBLIC_NAVER_AUTH_LOGIN_URI}`;
  };

  return (
    <StyledMain>
      <Logo />
      <h1>로그인</h1>
      <section>
        <LoginButton
          onClick={handleKakao}
          className="kakao_login_button"
          iconSrc={kakaoIcon}
          iconAlt="icon_kakao"
          span="카카오계정으로 로그인"
        />
        {/* <LoginButton
          onClick={handleNaver}
          className="naver_login_button"
          iconSrc={naverIcon}
          iconAlt="icon_naver"
          span="네이버 아이디로 로그인"
        /> */}
        <NaverLogin />
        <Link href="#">회원가입 하기</Link>
      </section>
    </StyledMain>
  );
}
export default Login;
