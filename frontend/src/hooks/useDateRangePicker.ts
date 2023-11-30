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

  const handleDateSelect = (
    dateString: string,
    onDaySelect?: CallableFunction,
    checkIn?: boolean,
  ) => {
    const selectFunc = checkIn ? handleCheckIn : handleCheckOut;
    const nextSelectedDates = selectFunc(dateString);

    setSelectedDateRange(nextSelectedDates);
    onDaySelect?.(nextSelectedDates);
  };

  const handleCheckOut = (dateString: string) => {
    const startDate = selectedDateRange.startDate ? toDate(selectedDateRange.startDate) : null;
    const selectedDate = toDate(dateString);
    const nextSelectedDates: SelectedDateRange = {
      startDate: null,
      endDate: null,
    };

    if (!startDate) {
      nextSelectedDates.startDate = dateString;
    } else if (startDate > selectedDate) {
      nextSelectedDates.startDate = dateString;
      nextSelectedDates.endDate = null;
    } else {
      nextSelectedDates.startDate = selectedDateRange.startDate;
      nextSelectedDates.endDate = dateString;
    }

    return nextSelectedDates;
  };

  const handleCheckIn = (dateString: string) => {
    const endDate = selectedDateRange.endDate ? toDate(selectedDateRange.endDate) : null;
    const selectedDate = toDate(dateString);
    const nextSelectedDates: SelectedDateRange = {
      startDate: null,
      endDate: null,
    };

    nextSelectedDates.startDate = dateString;
    if (endDate && endDate > selectedDate) {
      nextSelectedDates.endDate = selectedDateRange.endDate;
    }

    return nextSelectedDates;
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
