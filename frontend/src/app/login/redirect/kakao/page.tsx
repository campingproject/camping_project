'use client';

import { userAtom } from '@/atoms';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

function KakaoLoginRedirect() {
  const setUserData = useSetRecoilState(userAtom);
  const searchParams = useSearchParams();
  const authCode = searchParams.get('code');
  const router = useRouter();

  const fetchUserData = async (code: string | string[]) => {
    try {
      const res = await fetch(`/api/login/kakao?code=${code}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const json = await res.json();
      const data = json.data;
      const userData = {
        email: data.kakao_account.email || '',
        nickname: data.kakao_account.profile.nickname || '',
        profile_image: data.kakao_account.profile.thumbnail_image_url || '',
        name: '',
        mobile: '',
      };
      setUserData(userData);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (authCode) {
      fetchUserData(authCode);
    }
  }, [authCode]);
  return <div>KakaoLoginRedirect</div>;
}
export default KakaoLoginRedirect;
