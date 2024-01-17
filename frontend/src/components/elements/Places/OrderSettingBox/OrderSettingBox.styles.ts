import styled from 'styled-components';
import Theme from '@/styles/theme';

export const Container = styled.section`
  width: 80vw;
  margin: auto;
  border: 1px solid ${Theme.colors.gray200};
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0px 0px 5px 0px ${Theme.colors.gray200};
`;

export const BasicPriceWrap = styled.div`
  padding-bottom: 20px;
  span {
    font-size: ${Theme.fontSize.large};
  }
  span:nth-child(2) {
    color: ${Theme.colors.gray300};
  }
`;

export const OptionsContainer = styled.div`
  color: ${Theme.colors.gray400};
  border-radius: 20px;
  border: 1px solid ${Theme.colors.gray200};
`;

export const LinkWrap = styled.div`
  width: 100%;
  display: flex;
  padding-top: 5px;
  padding-bottom: 15px;
  a {
    display: flex;
    text-decoration: none;
    color: ${Theme.colors.gray500};
    align-items: center;
    justify-content: center;
    font-size: ${Theme.fontSize.large};
    border-radius: 15px;
    width: 96%;
    height: 50px;
    margin: auto;
    background-color: ${Theme.colors.orange300};
  }
`;

export const TextWrap = styled.div`
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 5px;
  width: 100%;
  text-align: center;
  span {
    font-size: ${Theme.fontSize.medium};
    color: ${Theme.colors.gray350};
  }
  ul {
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    font-size: ${Theme.fontSize.large};
    li {
      padding-top: 5px;
    }
  }
  ul:nth-child(2) {
    padding-bottom: 15px;
    border-bottom: 1px solid ${Theme.colors.gray200};
    color: ${Theme.colors.gray400};
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    span {
      font-size: ${Theme.fontSize.small};
    }
    ul {
      font-size: ${Theme.fontSize.medium};
    }
  }
`;
