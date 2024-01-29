import Link from 'next/link';
import * as Styled from './OrderSettingBox.styles';
import NumberOfVisitor from './fragments/NumberOfVisitor/NumberOfVisitor';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { DateRangePicker } from '@/components/Header/DateRangePicker';
import { SelectedDateRange } from '@/types/date';
import DateDialog from './fragments/DateDialog/DateDialog';

type DialogTypes = '지역' | '체크인' | '체크아웃' | '인원';

function OrderSettingBox() {
  const params = useParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [dialogType, setDialogType] = useState<DialogTypes>();

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (type: DialogTypes) => {
    setDialogType(type);
    setIsDialogOpen(true);
  };

  const handleCheckIn = (dates: SelectedDateRange) => {
    const { startDate, endDate } = dates;
    setStartDate(startDate);
    setEndDate(endDate);

    setDialogType('체크아웃');
  };

  const handleCheckOut = (dates: SelectedDateRange) => {
    const { startDate, endDate } = dates;

    setStartDate(startDate);
    setEndDate(endDate);
  };

  const hideDialog = () => setIsDialogOpen(false);

  const handleOutsideClick = ({ target }: MouseEvent) => {
    if (target === null) {
      return;
    }

    if (!dialogRef.current?.contains(target as Node)) {
      hideDialog();
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleOutsideClick);

    return () => document.removeEventListener('mouseup', handleOutsideClick);
  });

  return (
    <Styled.Container>
      <Styled.BasicPriceWrap>
        {/* todo: api로 해당 캠핑장의 기본 가격 데이터 가져오기 */}
        <span>###기본 가격 </span>
        <span>/ #박</span>
      </Styled.BasicPriceWrap>
      <Styled.OptionsContainer>
        {/* todo: searchBar에서 Recoil에 저장한 상태값 가져와서 날짜/인원 적용  */}
        <Styled.DateWrap>
          <Styled.DateBox
            $open={isDialogOpen && dialogType === '체크인'}
            onClick={() => openDialog('체크인')}
          >
            <ul>
              <li>체크인</li>
              <li>{startDate ?? '날짜 선택'}</li>
            </ul>
          </Styled.DateBox>
          <Styled.DateBox
            $open={isDialogOpen && dialogType === '체크아웃'}
            onClick={() => openDialog('체크아웃')}
          >
            <ul>
              <li>체크아웃</li>
              <li>{endDate ?? '날짜 선택'}</li>
            </ul>
          </Styled.DateBox>
        </Styled.DateWrap>
        {isDialogOpen && (dialogType === '체크인' || dialogType === '체크아웃') && (
          <DateDialog ref={dialogRef}>
            <DateRangePicker
              isPastDaysRestricted
              checkIn={dialogType === '체크인'}
              onDateSelect={dialogType === '체크인' ? handleCheckIn : handleCheckOut}
              initialSelectedDateRange={{ startDate, endDate }}
            />
          </DateDialog>
        )}
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
