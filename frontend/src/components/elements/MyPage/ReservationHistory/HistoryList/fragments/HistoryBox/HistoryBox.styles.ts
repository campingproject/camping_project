import styled from 'styled-components';
import Theme from '@/styles/theme';

export const Container = styled.div`
  cursor: pointer;
  width: 400px;
  display: flex;
  gap: 15px;
  align-items: center;
  margin: 20px;
  img {
    border-radius: 10px;
    width: 90px;
    height: 90px;
  }
`;
export const TextWrap = styled.div`
  width: 250px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${Theme.colors.gray400};
  }
  ul > li:nth-child(1) {
    font-size: ${Theme.fontSize.medium};
    font-weight: 500;
    color: ${Theme.colors.black};
  }
`;
