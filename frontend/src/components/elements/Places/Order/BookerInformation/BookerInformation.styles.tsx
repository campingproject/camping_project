import styled from 'styled-components';
import Theme from '@/styles/theme';

export const Container = styled.section`
  width: 42vw;
  border-top: 1px solid ${Theme.colors.gray200};
  border-bottom: 1px solid ${Theme.colors.gray200};
  padding-top: 30px;
  padding-bottom: 30px;
  h1 {
    margin-left: 103px;
    font-size: ${Theme.fontSize.large};
    font-weight: bold;
    margin-bottom: 10px;
  }
  button {
    display: flex;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
    width: 340px;
    height: 35px;
    background-color: ${Theme.colors.orange300};
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: ${Theme.screen.tablet}) {
    width: 85vw;
    margin: auto;
    h1 {
      margin-left: 47px;
    }
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    width: 85vw;
    margin: auto;
    h1 {
      margin-left: 18px;
    }
  }
`;
