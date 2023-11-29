import Theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.span`
  color: ${Theme.colors.gray400};
  font-size: ${Theme.fontSize.small};
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`;
