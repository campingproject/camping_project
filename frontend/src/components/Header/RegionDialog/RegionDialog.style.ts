import Theme from '@/styles/theme';
import styled from 'styled-components';

export const RegionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-size: ${Theme.fontSize.large};
`;

export const RegionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  gap: 8px;
  margin-top: 24px;
`;

export const RegionButton = styled.button`
  width: 48px;
  padding: 8px;
  background-color: ${Theme.colors.gray200};
  font-size: ${Theme.fontSize.xsmall};
  border: 0;
  outline: 0;
  cursor: pointer;
`;
