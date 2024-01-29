'use client';

import Link from 'next/link';
import { Logo } from '../common/Logo';
import { SearchBar } from './SearchBar';
import { HeaderContainer } from './Header.style';
import { MenuIcon } from '@/public/svgs';
import Image from 'next/image';
import { useState } from 'react';
import MenuBar from './MenuBar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenuBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Link style={{ width: '20%' }} href={'/'}>
        <Logo />
      </Link>
      <SearchBar />
      {/**TODO - Menu bar 구현 */}
      <div style={{ width: '10%', position: 'relative' }}>
        <Image
          style={{ width: '30px', cursor: 'pointer' }}
          onClick={openMenuBar}
          src={MenuIcon}
          alt="menu"
        />
        {isOpen && <MenuBar />}
      </div>
    </HeaderContainer>
  );
}
