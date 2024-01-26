'use client';

import Image from 'next/image';
import { TitleWrap } from './PageTitle.styles';
import Link from 'next/link';

type Props = {
  href?: string;
  iconSrc?: string;
  title: string;
};
function PageTitle({ href, iconSrc, title }: Props) {
  return (
    <TitleWrap>
      <Link href={href}>
        <Image alt="icon" src={iconSrc} width={35} height={35} />
      </Link>
      <h1>{title}</h1>
    </TitleWrap>
  );
}
export default PageTitle;
