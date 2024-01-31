import { useEffect } from 'react';
import LoginButton from '../LoginButton';
import { naverIcon } from '@/public/svgs';

export default function NaverLogin() {
  const initNaverLogin = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI,
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: 50 },
    });
    naverLogin.init();
  };

  const handleNaverClick = () => {
    const naverLoginButton = document.getElementById('naverIdLogin_loginButton');
    if (naverLoginButton) naverLoginButton.click();
  };

  useEffect(() => {
    // initNaverLogin();
  }, []);

  return (
    <>
      <LoginButton
        onClick={handleNaverClick}
        className="naver_login_button"
        iconSrc={naverIcon}
        iconAlt="icon_naver"
        span="네이버 아이디로 로그인"
      />
      <div id="naverIdLogin" style={{ display: 'none' }} />
    </>
  );
}
