import Theme from '@/styles/theme';
import { useEffect, useState } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth);
      });
    };
  }, []);

  return width;
};

export default useWindowWidth;
