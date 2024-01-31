'use client';
import { userAtom } from '@/atoms';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
function NaverLoginRedirect() {
  const setUserData = useSetRecoilState(userAtom);
  const router = useRouter();

  const token = new URL(window.location.href).hash.split('#')[1]?.split('=')[1].split('&')[0];

  const fetchUserData = async (token: string | string[]) => {
    try {
      const res = await fetch(`/api/login/naver?token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const json = await res.json();
      const data = json.data.response;
      const userData = {
        email: data.email || '',
        nickname: data.nickname || '',
        profile_image: data.profile_image || '',
        name: data.name || '',
        mobile: data.mobile || '',
      };
      setUserData(userData);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (window.location.href.includes('access_token')) {
      fetchUserData(token);
      // router.push('/');
    }
  }, []);
  return <div>NaverLoginRedirect</div>;
}
export default NaverLoginRedirect;
