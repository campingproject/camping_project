import styled from 'styled-components';
import Theme from '@/styles/theme';

export const TitleWrap = styled.div`
  width: 1100px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  h1 {
    font-size: ${Theme.fontSize.xxlarge};
    color: ${Theme.colors.gray500};
  }
  a {
    font-size: ${Theme.fontSize.large};
    text-decoration: none;
    color: ${Theme.colors.gray400};
    &:hover {
      color: ${Theme.colors.black};
    }
  }
  @media screen and (max-width: ${Theme.screen.tablet}) {
    gap: 35px;
    margin-bottom: 20px;

    h1 {
      margin-left: 50px;
    }
    a {
      margin-left: 50px;
    }
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    gap: 35px;
    margin-bottom: 20px;

    h1 {
      margin-left: 35px;
    }
    a {
      margin-left: 35px;
    }
  }
`;

export const Section = styled.section`
  display: grid;
  width: 1150px;
  margin: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 50px;
  @media screen and (max-width: ${Theme.screen.tablet}) {
    display: flex;
    flex-direction: column;
    width: 85%;
    row-gap: 15px;
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    display: flex;
    flex-direction: column;
    width: 85%;
    row-gap: 15px;
  }
`;
