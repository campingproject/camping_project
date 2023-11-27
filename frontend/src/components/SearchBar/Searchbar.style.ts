import Theme from '@/styles/theme';
import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  background-color: ${Theme.colors.gray100};
  border-radius: 28px;
`;

export const InputBox = styled.div<{ $open: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 120px;
  padding: 8px 16px;
  gap: 4px;
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

export const Title = styled.span`
  font-size: ${Theme.fontSize.xsmall};
  color: ${Theme.colors.gray400};
`;

export const Content = styled.span`
  font-size: ${Theme.fontSize.medium};
`;

export const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 240px;
`;

export const DialogTitle = styled.div`
  font-size: ${Theme.fontSize.large};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 8px;
`;
