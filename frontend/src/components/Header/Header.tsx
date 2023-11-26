'use client';

import Link from 'next/link';
import { Logo } from '../Logo';
import { SearchBar } from '../SearchBar';
import { HeaderContainer } from './Header.style';

export default function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Logo />
      </Link>
      <SearchBar />
      <div>profile</div>
    </HeaderContainer>
  );
}
