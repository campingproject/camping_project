'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useSWR from 'swr';

const fetcher = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include',
  });
  // const data = await response.text();
  const data = await response.json();
  return data;
};

function LoginRedirect() {
  const { data, isLoading, error } = useSWR('/api/oauth', fetcher);
  const router = useRouter();
  // console.log(data);
  useEffect(() => {
    // if (data) return router.replace('/');
  }, [data]);
  if (isLoading) return <div>isLoading...</div>;
  if (error) return <div>error...</div>;
  return <div>LoginRedirect</div>;
}
export default LoginRedirect;

// const res = await fetch('https://api.campinggo.store', {
// const fetchData = async () => {
//   try {
//     const res = await fetch('/api/oauth', {
//       method: 'GET',
//       credentials: 'include',
//     });
//     // const data = await res.json();
//     const data = await res.text();
//     // setData(data);
//     console.log(res);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchData();
