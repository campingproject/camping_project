import Image from 'next/image';
import * as Styled from './ScheduleDetails.styles';
import { placeSampleImg1 } from '@/public/svgs';

function ScheduleDetails() {
  return (
    <Styled.Container>
      <Styled.CampsiteInfoWrap>
        {/* todo: Recoil에 저장된 현재 캠핑장 데이터 가져오기 */}
        <div>
          <Image src={placeSampleImg1} alt="placeImage" width={90} height={90} />
        </div>
        <ul>
          <li>###캠핑장명</li>
          <li>###캠핑 사이트명(ex: 카라반02)</li>
          <li>기준인원: ##명</li>
          <li>기준차량: ##대</li>
        </ul>
      </Styled.CampsiteInfoWrap>
      <Styled.PeriodWrap>
        <ul>
          <li>체크인</li>
          <li>###12.24(목)</li>
          <li>###오후 02:00</li>
        </ul>
        <span>2박</span>
        <ul>
          <li>체크인</li>
          <li>###12.24(목)</li>
          <li>###오후 02:00</li>
        </ul>
      </Styled.PeriodWrap>
      <Styled.OrderDetails>
        <h2>예약 세부정보</h2>
        <ul>
          <li>###캠핑지명</li>
          <li>###날짜</li>
        </ul>
        <ul>
          <li>#####원 * #박</li>
          <li>#####원</li>
        </ul>
        <ul>
          <li>인원</li>
          <li>##명</li>
        </ul>
        <ul>
          <li>대표자명</li>
          <li>###</li>
        </ul>
      </Styled.OrderDetails>
    </Styled.Container>
  );
}
export default ScheduleDetails;
