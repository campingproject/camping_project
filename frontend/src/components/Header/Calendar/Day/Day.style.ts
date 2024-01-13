import Theme from '../../../../styles/theme';
import styled from 'styled-components';

export const DayContainer = styled.div<{
  $isStart?: boolean;
  $isEnded?: boolean;
  $isInRange?: boolean;
}>`
  min-width: 48px;
  width: 48px;
  height: 48px;

  background-color: ${(props) => (props.$isInRange ? Theme.colors.gray100 : Theme.colors.white)};

  border-top-left-radius: ${(props) => (props.$isStart ? '50%' : '')};
  border-bottom-left-radius: ${(props) => (props.$isStart ? '50%' : '')};

  border-top-right-radius: ${(props) => (props.$isEnded ? '50%' : '')};
  border-bottom-right-radius: ${(props) => (props.$isEnded ? '50%' : '')};
`;

export const DayDefaultBox = styled.span<{ $isClickable?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 46px;
  height: 46px;
  background-color: ${Theme.colors.white};
  box-sizing: border-box;

  font-size: ${Theme.fontSize.small};
  font-weight: 600;

  cursor: ${(props) => (props.$isClickable ? 'pointer' : 'default')};
  border-radius: 50%;

  &:hover {
    border: ${(props) => (props.$isClickable ? `0.5px solid ${Theme.colors.black}` : '')};
  }
`;

export const DayInRangeBox = styled(DayDefaultBox)`
  background-color: inherit;
`;

export const SelectedDayBox = styled(DayDefaultBox)`
  background-color: ${Theme.colors.black};

  color: ${Theme.colors.white};
`;

export const DisabledDayBox = styled(DayDefaultBox)`
  background-color: ${Theme.colors.white};

  color: ${Theme.colors.gray300};

  pointer-events: none;

  &:hover {
    background-color: ${Theme.colors.white};
  }
`;
