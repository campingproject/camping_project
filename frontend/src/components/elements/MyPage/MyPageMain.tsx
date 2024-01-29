'use client';

import Link from 'next/link';
import LinkBox from './fragments/LinkBox';
import { calenderIcon, eventIcon, heartIcon, shoppingCartIcon } from '@/public/svgs';
import { useRouter } from 'next/navigation';
import Advertisement from './fragments/Advertisement';
import * as Styled from './MyPageMain.styles';

function MyPageMain() {
  const router = useRouter();

  return (
    <main>
      <Styled.TitleWrap>
        <h1>마이페이지</h1>
        <Link href="/mypage/member-information">회원 정보 관리</Link>
      </Styled.TitleWrap>
      <Styled.Section>
        <LinkBox
          onClick={() => router.push('/mypage/reservation-history')}
          imgSrc={calenderIcon}
          title="예약 내역 확인"
          desc="현재 예약 / 지난 예약 / 진행중인 예약"
        />
        <LinkBox
          onClick={() => router.push('/mypage/shopping-history')}
          imgSrc={shoppingCartIcon}
          title="쇼핑 내역 확인"
          desc="구매 목록/ 장바구니 목록 / 배송 조회"
        />
        <LinkBox
          onClick={() => router.push('/mypage/wish-list')}
          imgSrc={heartIcon}
          title="찜한 내역 확인"
          desc="찜한 내역"
        />
        <LinkBox
          onClick={() => router.push('/mypage/event-history')}
          imgSrc={eventIcon}
          title="이벤트 내역 확인"
          desc="이벤트 참여 내역 / 이벤트 당첨 내역"
        />
      </Styled.Section>
      <Advertisement />
    </main>
  );
}
export default MyPageMain;
