import Theme from '@/styles/theme';
import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  background-color: ${Theme.colors.gray200};
  border-radius: 28px;
`;

export const InputBox = styled.div<{ $open: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 120px;
  padding: 8px;
  border-radius: 28px;
  background-color: ${(props) => (props.$open ? `${Theme.colors.orange200}` : 'inherit')};
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 0;
  outline: none;
  border: 0;
  background: none;
`;

export const DateSelectBox = styled.div`
  display: flex;
  width: 240px;
`;
