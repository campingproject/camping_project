import Theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 530px;
  height: 230px;
  border: 1px solid ${Theme.colors.gray300};
  border-radius: 10px;
  padding: 15px;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
`;

export const TextWrap = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.p`
  color: ${Theme.colors.black};
  font-size: ${Theme.fontSize.large};
`;

export const Desc = styled.p`
  color: ${Theme.colors.gray400};
  font-size: ${Theme.fontSize.medium};
`;
