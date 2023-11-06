'use client';

import useUserDetail from '@/hooks/useMswHook';
import useMswHook from '@/hooks/useMswHook';

export default function MswTest() {
  const userId = '3';
  const { data, isLoading } = useUserDetail(userId);
  console.log(data);

  return <>{isLoading && <div>로딩중입니다</div>}</>;
}
