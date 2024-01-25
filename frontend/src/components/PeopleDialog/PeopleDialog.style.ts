import Theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${Theme.fontSize.small};
  color: ${Theme.colors.gray500};
`;

export const Description = styled.span`
  color: ${Theme.colors.gray350};
  font-size: ${Theme.fontSize.xsmall};
  padding-top: 6px;
`;

export const ButtonBox = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  gap: 8px;
  button {
    margin: auto;
    width: 23px;
    height: 23px;
    padding: 0;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid ${Theme.colors.gray350};
    cursor: pointer;
  }
  div {
    width: 22px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
