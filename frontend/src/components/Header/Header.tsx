'use client';

import Link from 'next/link';
import { Logo } from '../common/Logo';
import { SearchBar } from '../SearchBar';
import { HeaderContainer } from './Header.style';
import { MenuIcon } from '@/public/svgs';
import Image from 'next/image';

export default function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Logo />
      </Link>
      <SearchBar />
      {/**TODO - Menu bar 구현 */}
      <Image src={MenuIcon} alt="menu" />
    </HeaderContainer>
  );
}
