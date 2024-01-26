import styled from 'styled-components';
import Theme from '@/styles/theme';

export const Main = styled.main``;
export const TitleWrap = styled.div`
  width: 1100px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 70px;

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
`;

export const Section = styled.section`
  display: grid;
  width: 1150px;
  margin: auto;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 50px;
`;
