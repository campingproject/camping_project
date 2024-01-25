"use client";

import Link from "next/link";
import { Logo } from "../common/Logo";
import { SearchBar } from "../SearchBar";
import { HeaderContainer } from "./Header.style";
import { MenuIcon } from "@/public/svgs";
import Image from "next/image";

export default function Header() {
  return (
    <HeaderContainer>
      <Link style={{ width: "20%" }} href={"/"}>
        <Logo />
      </Link>
      <SearchBar />
      {/**TODO - Menu bar 구현 */}
      <div style={{ width: "10%" }}>
        <Image
          style={{ width: "30px", cursor: "pointer" }}
          src={MenuIcon}
          alt="menu"
        />
      </div>
    </HeaderContainer>
  );
}
