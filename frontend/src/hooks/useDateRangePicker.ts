import { useState } from 'react';
import { DateRangePickerCalendar, SelectedDateRange } from '../types/date';
import { getNewYearMonthInfo, getYearMonthInfo, toDate } from '../utils/date';
import { CALENDAR_MONTH_CHANGE } from '../constants/date';

export const useDateRangePicker = (initialSelectedDateRange?: SelectedDateRange) => {
  const todayDate = new Date();
  const todayYearMonth = getYearMonthInfo(todayDate);
  const initialDate = initialSelectedDateRange?.startDate
    ? toDate(initialSelectedDateRange.startDate!)
    : todayDate;
  const currentYearMonth = getYearMonthInfo(initialDate);
  const postYearMonth = getNewYearMonthInfo(currentYearMonth, CALENDAR_MONTH_CHANGE.NEXT_MONTH);

  const [calendarData, setCalendarData] = useState<DateRangePickerCalendar>({
    currentYearMonth,
    postYearMonth,
  });

  const [selectedDateRange, setSelectedDateRange] = useState<SelectedDateRange>(
    initialSelectedDateRange ?? { startDate: null, endDate: null },
  );

  const handleMonthChange = (change: number) => () => {
    setCalendarData((prevCalendarData) => {
      const newCalendarData = { ...prevCalendarData };

      if (change > 0) {
        newCalendarData.currentYearMonth = prevCalendarData.postYearMonth;
        newCalendarData.postYearMonth = getNewYearMonthInfo(prevCalendarData.postYearMonth, change);
      }

      if (change < 0) {
        newCalendarData.postYearMonth = prevCalendarData.currentYearMonth;
        newCalendarData.currentYearMonth = getNewYearMonthInfo(
          prevCalendarData.currentYearMonth,
          change,
        );
      }

      return newCalendarData;
    });
  };

  const resetSelectedDateRange = () => {
    setSelectedDateRange({ startDate: null, endDate: null });
  };

  const handleDateSelect = (dateString: string, onDaySelect?: CallableFunction) => {
    const startDate = selectedDateRange.startDate ? toDate(selectedDateRange.startDate) : null;
    const selectedDate = toDate(dateString);
    const nextSelectedDates: SelectedDateRange = {
      startDate: null,
      endDate: null,
    };

    if (startDate && !selectedDateRange.endDate && selectedDate < startDate) {
      nextSelectedDates.startDate = dateString;
      nextSelectedDates.endDate = selectedDateRange.startDate;
    } else if (startDate && !selectedDateRange.endDate) {
      nextSelectedDates.startDate = selectedDateRange.startDate;
      nextSelectedDates.endDate = dateString;
    } else {
      nextSelectedDates.startDate = dateString;
    }

    setSelectedDateRange(nextSelectedDates);
    onDaySelect?.(nextSelectedDates);
  };

  return {
    todayDate,
    todayYearMonth,
    calendarData,
    handleMonthChange,
    selectedDateRange,
    resetSelectedDateRange,
    handleDateSelect,
  };
};
