'use client';

import Link from 'next/link';
import { Logo } from '../Logo';
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
      <Image src={MenuIcon} alt="menu" />
    </HeaderContainer>
  );
}
