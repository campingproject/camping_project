import { useMemo } from 'react';
import { SelectedDateRange, YearMonth } from '../../../types/date';
import { getDayBoxSize, getDayInfo } from '../../../utils/date';
import {
  CalendarContainer,
  CalendarHeader,
  DaysContainer,
  DaysOfWeekContainer,
  WeekOfDaysBox,
} from './Calendar.style';
import Day from './Day/Day';
import { DAYS_OF_WEEK } from '../../../constants/date';

export interface CalendarProps {
  /** 현재 Date */
  currentDate: Date;

  /** 현재 년월 정보 */
  yearMonthData: YearMonth;

  /** 현재 선택된 날짜 범위 */
  dateRange?: SelectedDateRange;

  /** 오늘 이후 날짜를 막을 것인지에 대한 여부 */
  isFutureDaysRestricted?: boolean;

  /** 오늘 이전 날짜를 막을 것인지에 대한 여부 */
  isPastDaysRestricted?: boolean;

  /** 특정 범위를 벗어나는 날짜에 대해서 선택 불가능할지에 대한 여부 */
  hasRangeRestriction?: boolean;

  /** 최대로 선택할 수 있는 날짜 범위 */
  maxDateRange?: number;

  /** 현재 선택된 날짜 */
  selectedDate?: number;

  /** 특정 날짜를 선택했을 때 실행할 함수 */
  onDateClick?: CallableFunction;
}

const Calendar = ({
  currentDate,
  yearMonthData,
  dateRange,
  isFutureDaysRestricted,
  isPastDaysRestricted,
  hasRangeRestriction,
  maxDateRange,
  selectedDate,
  onDateClick,
}: CalendarProps) => {
  const dayBoxSize = useMemo(() => getDayBoxSize(yearMonthData), [yearMonthData]);

  return (
    <CalendarContainer aria-label="달력" tabIndex={-1}>
      <CalendarHeader tabIndex={-1} aria-label={`${yearMonthData.year}년 ${yearMonthData.month}월`}>
        <h4>
          {yearMonthData.year}년 {yearMonthData.month}월
        </h4>
      </CalendarHeader>
      <DaysOfWeekContainer>
        {DAYS_OF_WEEK.map((day) => (
          <WeekOfDaysBox key={day}>{day}</WeekOfDaysBox>
        ))}
      </DaysOfWeekContainer>
      <DaysContainer>
        {Array.from({ length: dayBoxSize }, (_, index) => {
          const {
            date,
            isDate,
            dateString,
            isToday,
            isSelected,
            isInRange,
            isRestricted,
            isStart,
            isEnded,
          } = getDayInfo({
            index,
            yearMonthData,
            currentDate,
            dateRange,
            maxDateRange,
            isFutureDaysRestricted,
            isPastDaysRestricted,
            hasRangeRestriction,
            selectedDate,
          });

          return isDate ? (
            <Day
              key={dateString}
              year={yearMonthData.year}
              month={yearMonthData.month}
              day={date}
              isToday={isToday}
              isSelected={isSelected}
              isInRange={isInRange}
              isStart={isStart}
              isEnded={isEnded}
              isDisabled={isRestricted}
              onClick={() => {
                onDateClick?.(date, yearMonthData);
              }}
            />
          ) : (
            <Day key={index} />
          );
        })}
      </DaysContainer>
    </CalendarContainer>
  );
};

export default Calendar;
