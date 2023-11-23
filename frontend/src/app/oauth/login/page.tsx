'use client';

import { Logo } from '@/components/Logo';
import { StyledMain } from './Login.styles';
import Link from 'next/link';
import { kakaoIcon, naverIcon } from '@/public/svgs';
import LoginButton from '@/components/features/Login/LoginButton';
import { KAKAO_AUTH_LOGIN_URI, NAVER_AUTH_LOGIN_URI } from '@/constants/oauth';

function Login() {
  const handleKakao = () => {
    console.log('카카오 로그인 버튼 클릭');
    window.location.href = KAKAO_AUTH_LOGIN_URI;
  };
  const handleNaver = () => {
    console.log('네이버 로그인 버튼 클릭');
    window.location.href = NAVER_AUTH_LOGIN_URI;
  };

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
