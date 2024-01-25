import { CALENDAR_MONTH_CHANGE, DEFAULT_MAX_DATE_RANGE } from '../../../constants/date';
import { useDateRangePicker } from '../../../hooks/useDateRangePicker';
import { SelectedDateRange, YearMonth } from '../../../types/date';
import { formatDate } from '../../../utils/date';
import Calendar from '../Calendar/Calendar';
import { DateRangePickerContainer, NextButton, PastButton } from './DateRangePicker.style';

export interface DateRangePickerProps {
  /** 오늘 이후 날짜를 막을 것인지에 대한 여부 */
  isFutureDaysRestricted?: boolean;

  /** 오늘 이전 날짜를 막을 것인지에 대한 여부 */
  isPastDaysRestricted?: boolean;

  /** 오늘 이전 달 버튼을 막을 것인지에 대한 여부 */
  isPastMonthButtonRestricted?: boolean;

  /** 특정 범위를 벗어나는 날짜에 대해서 선택 불가능할지에 대한 여부 */
  hasRangeRestriction?: boolean;

  /** 최대로 선택할 수 있는 날짜 범위 */
  maxDateRange?: number;

  /** 현재 선택된 날짜 범위 */
  initialSelectedDateRange?: SelectedDateRange;

  /** 날짜를 선택했을 때 실행할 함수 */
  onDateSelect?: CallableFunction;

  /** 체크인 버튼 클릭 여부 */
  checkIn?: boolean;
}

const DateRangePicker = ({
  isFutureDaysRestricted = false,
  hasRangeRestriction = false,
  isPastDaysRestricted = false,
  isPastMonthButtonRestricted = false,
  maxDateRange = DEFAULT_MAX_DATE_RANGE,
  initialSelectedDateRange,
  onDateSelect,
  checkIn = false,
}: DateRangePickerProps) => {
  const {
    todayDate,
    todayYearMonth,
    calendarData,
    handleMonthChange,
    selectedDateRange,
    handleDateSelect,
  } = useDateRangePicker(initialSelectedDateRange);

  const isForbiddenToPastButton =
    isPastMonthButtonRestricted &&
    (todayYearMonth.year > calendarData.currentYearMonth.year ||
      todayYearMonth.month >= calendarData.currentYearMonth.month);

  const handleDateClick = (date: number, yearMonth: YearMonth) => {
    const clickedDate = formatDate({
      year: yearMonth.year,
      month: yearMonth.month,
      date,
    });
    handleDateSelect(clickedDate, onDateSelect, checkIn);
  };

  const handlePastButton = () => {
    if (isForbiddenToPastButton) return;
    handleMonthChange(CALENDAR_MONTH_CHANGE.PREVIOUS_MONTH)();
  };

  return (
    <DateRangePickerContainer role="application" aria-roledescription="date picker" tabIndex={-1}>
      <PastButton $disabled={isForbiddenToPastButton} onClick={handlePastButton}>{`＜`}</PastButton>
      <Calendar
        currentDate={todayDate}
        yearMonthData={calendarData.currentYearMonth}
        dateRange={selectedDateRange}
        isFutureDaysRestricted={isFutureDaysRestricted}
        isPastDaysRestricted={isPastDaysRestricted}
        hasRangeRestriction={hasRangeRestriction}
        maxDateRange={maxDateRange}
        onDateClick={handleDateClick}
      />
      <Calendar
        currentDate={todayDate}
        yearMonthData={calendarData.postYearMonth}
        dateRange={selectedDateRange}
        isFutureDaysRestricted={isFutureDaysRestricted}
        isPastDaysRestricted={isPastDaysRestricted}
        hasRangeRestriction={hasRangeRestriction}
        maxDateRange={maxDateRange}
        onDateClick={handleDateClick}
      />
      <NextButton onClick={handleMonthChange(CALENDAR_MONTH_CHANGE.NEXT_MONTH)}>{`＞`}</NextButton>
    </DateRangePickerContainer>
  );
};

export default DateRangePicker;
