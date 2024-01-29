import styled from 'styled-components';
import Theme from '../../../styles/theme';
import { DayDefaultBox } from './Day/Day.style';

export const CalendarContainer = styled.div`
  display: inline-block;
`;

export const CalendarHeader = styled.header`
  margin-bottom: 6px;
  text-align: center;

  & div {
    font-weight: 600;
  }
`;

export const WeekOfDaysBox = styled(DayDefaultBox)`
  color: ${Theme.colors.gray400};

  font-size: ${Theme.fontSize.xsmall};
  font-weight: 400;
`;

export const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 48px);
  grid-auto-rows: 48px;
  border-spacing: 0 2px;
  grid-row-gap: 1px;
`;

export const DaysOfWeekContainer = styled(DaysContainer)`
  margin-bottom: 2px;

  & div {
    color: ${Theme.colors.gray600};

    cursor: default;
  }
`;
