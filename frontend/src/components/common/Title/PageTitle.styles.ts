import styled from 'styled-components';
import Theme from '@/styles/theme';

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 50px 30px 9vw;
  a {
    img {
      padding: 10px;
    }
  }
  h1 {
    font-size: ${Theme.fontSize.xxlarge};
    color: ${Theme.colors.gray500};
  }

  @media screen and (max-width: ${Theme.screen.tablet}) {
    margin: 40px 40px 30px 8vw;
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    margin: 40px 40px 30px 6vw;
  }
`;
