'use client';

import { useEffect, useRef, useState } from 'react';
import { SearchBarDialog } from '../SearchBarDialog';
import { DateRangePicker } from '../DateRangePicker';
import { RegionTypes } from '@/types/region';
import { SelectedDateRange } from '@/types/date';
import { Content, InputBox, SearchBarContainer, Title } from './Searchbar.style';
import { RegionDialog } from '../RegionDialog';

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
          <Title>지역</Title>
          <Content>{region ?? '지역 선택'}</Content>
          {isDialogOpen && dialogType === '지역' && (
            <SearchBarDialog ref={dialogRef}>
              <RegionDialog onRegionSelect={handleRegion} />
            </SearchBarDialog>
          )}
        </InputBox>
        <InputBox
          $open={isDialogOpen && dialogType === '체크인'}
          onClick={() => openDialog('체크인')}
        >
          <Title>체크인</Title>
          <Content>{startDate ?? '날짜 선택'}</Content>
        </InputBox>
        <InputBox
          $open={isDialogOpen && dialogType === '체크아웃'}
          onClick={() => openDialog('체크아웃')}
        >
          <Title>체크아웃</Title>
          <Content>{endDate ?? '날짜 선택'}</Content>
        </InputBox>
        <InputBox $open={isDialogOpen && dialogType === '인원'} onClick={() => openDialog('인원')}>
          <Title>인원</Title>
          <Content>인원 선택</Content>
          {isDialogOpen && dialogType === '인원' && (
            <SearchBarDialog ref={dialogRef} style={{ right: 0 }}>
              <div style={{ width: '200px' }}>
                <Title>인원 선택</Title>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span>성인</span>
                    <span style={{ color: 'gray' }}>만 19세 이상</span>
                  </div>
                  <div>
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                </div>
              </div>
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
