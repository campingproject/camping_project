import Link from 'next/link';
import * as Styled from './OrderSettingBox.styles';
import NumberOfVisitor from './fragments/NumberOfVisitor/NumberOfVisitor';
import ReservePeriod from './fragments/ReservePeriod';
import { useParams } from 'next/navigation';

function OrderSettingBox() {
  const params = useParams();

  return (
    <Styled.Container>
      <Styled.BasicPriceWrap>
        {/* todo: api로 해당 캠핑장의 기본 가격 데이터 가져오기 */}
        <span>###기본 가격 </span>
        <span>/ #박</span>
      </Styled.BasicPriceWrap>
      <Styled.OptionsContainer>
        {/* todo: searchBar에서 Recoil에 저장한 상태값 가져와서 날짜/인원 적용  */}
        <ReservePeriod checkInDate="###체크인 날짜" checkOutDate="###체크아웃 날짜" />
        <NumberOfVisitor />
        <Styled.LinkWrap>
          <Link href={`/places/${params.id}/order`}>예약하기</Link>
        </Styled.LinkWrap>
      </Styled.OptionsContainer>
      <Styled.TextWrap>
        <span>예약 확정 전에는 요금이 청구되지 않습니다.</span>
        <ul>
          <li>###기본 가격 * #박</li>
          <li>####원</li>
        </ul>
        <ul>
          <li>총 합계</li>
          <li>####원</li>
        </ul>
      </Styled.TextWrap>
    </Styled.Container>
  );
}
export default OrderSettingBox;
