'use client';

import { useEffect, useState } from 'react';

function LoginRedirect() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.campinggo.store', {
          // const res = await fetch('/api/oauth', {
          method: 'GET',
          credentials: 'include',
        });

        // const data = await res.json();
        const data = await res.text();
        setData(data);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    console.log(document.cookie);
  }, []);

  return <div>LoginRedirectPage</div>;
}
export default LoginRedirect;

const fetcher = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include',
  });
  const data = await response.json();
  return data;
};
