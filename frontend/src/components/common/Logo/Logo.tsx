import useWindowWidth from '@/hooks/useWindowWidth';
import { LogoIcon } from '@/public/svgs';
import Theme from '@/styles/theme';
import Image from 'next/image';

export default function Logo() {
  const innerWidth = useWindowWidth();
  return (
    <Image
      style={{
        width:
          innerWidth < Theme.window.tablet
            ? '120px'
            : innerWidth >= Theme.window.tablet && innerWidth < Theme.window.pc
            ? '150px'
            : '200px',
      }}
      src={LogoIcon}
      alt="logo"
      priority={true}
    />
  );
}
