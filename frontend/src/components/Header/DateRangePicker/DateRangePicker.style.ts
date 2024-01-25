import styled from 'styled-components';
import Theme from '../../../styles/theme';

export const DateRangePickerContainer = styled.div`
  position: relative;
  display: inline-flex;
  gap: 40px;

  @media screen and (max-width: 808px) {
    flex-wrap: wrap;
  }

  & > button {
    position: absolute;
    top: 2px;

    background-color: ${Theme.colors.white};
    border: none;
    outline: ${Theme.colors.white};

    font-size: ${Theme.fontSize.medium};
    font-weight: 600;
  }
`;

export const NextButton = styled.button`
  right: 0;

  cursor: pointer;

  @media screen and (max-width: 808px) {
    left: 324px;
    right: unset;
  }
`;

export const PastButton = styled.button<{ $disabled: boolean }>`
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.$disabled ? `${Theme.colors.gray300}` : 'black')};
`;
