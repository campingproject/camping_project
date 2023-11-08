import { LogoIcon } from '@/public/svgs';
import Image from 'next/image';

export default function Logo() {
  return <Image src={LogoIcon} alt="logo" priority={true} />;
}
