'use client';

import { useEffect, useRef, useState } from 'react';
import { SearchBarDialog } from '../SearchBarDialog';
import { REGIONS } from '@/constants/region';
import { DateRangePicker } from '../DateRangePicker';
import { RegionTypes } from '@/types/region';
import { SelectedDateRange } from '@/types/date';
import { InputBox, SearchBarContainer } from './Searchbar.style';

type DialogTypes = '지역' | '체크인' | '체크아웃' | '인원';

export default function SearchBar() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [region, setRegion] = useState<RegionTypes>(null);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [dialogType, setDialogType] = useState<DialogTypes>();

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (type: DialogTypes) => {
    setDialogType(type);
    setIsDialogOpen(true);
  };

  const handleRegion = (region: RegionTypes) => {
    setRegion(region);
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
    <div>
      <SearchBarContainer>
        <InputBox $open={isDialogOpen && dialogType === '지역'} onClick={() => openDialog('지역')}>
          <h3>지역</h3>
          <span>{region ?? '지역 선택'}</span>
          {isDialogOpen && dialogType === '지역' && (
            <SearchBarDialog ref={dialogRef}>
              <h2>지역으로 검색하기</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 40px)', gap: '8px' }}>
                {REGIONS.map((region) => (
                  <button key={region} onClick={() => handleRegion(region)}>
                    {region}
                  </button>
                ))}
              </div>
            </SearchBarDialog>
          )}
        </InputBox>
        <InputBox
          $open={isDialogOpen && dialogType === '체크인'}
          onClick={() => openDialog('체크인')}
        >
          <h3>체크인</h3>
          <span>{startDate ?? '날짜 선택'}</span>
        </InputBox>
        <InputBox
          $open={isDialogOpen && dialogType === '체크아웃'}
          onClick={() => openDialog('체크아웃')}
        >
          <h3>체크아웃</h3>
          <span>{endDate ?? '날짜 선택'}</span>
        </InputBox>
        <InputBox $open={isDialogOpen && dialogType === '인원'} onClick={() => openDialog('인원')}>
          <h3>인원</h3>
          <span>인원 선택</span>
          {isDialogOpen && dialogType === '인원' && (
            <SearchBarDialog ref={dialogRef}>
              <div>인원</div>
            </SearchBarDialog>
          )}
        </InputBox>
      </SearchBarContainer>
      {isDialogOpen && (dialogType === '체크인' || dialogType === '체크아웃') && (
        <SearchBarDialog ref={dialogRef}>
          <DateRangePicker
            isPastDaysRestricted
            checkIn={dialogType === '체크인'}
            onDateSelect={dialogType === '체크인' ? handleCheckIn : handleCheckOut}
            initialSelectedDateRange={{ startDate, endDate }}
          />
        </SearchBarDialog>
      )}
    </div>
  );
}
