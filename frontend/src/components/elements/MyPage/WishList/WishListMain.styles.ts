import styled from 'styled-components';
import Theme from '@/styles/theme';

export const Main = styled.main`
  h2 {
    font-size: ${Theme.fontSize.xlarge};
    margin-top: 60px;
    margin-bottom: 25px;
    margin-left: 10vw;
  }
  p {
    color: ${Theme.colors.gray400};
    margin-left: 10vw;
    margin-bottom: 20px;
    font-size: ${Theme.fontSize.large};
  }
  @media screen and (max-width: ${Theme.screen.tablet}) {
    h2 {
      margin-top: 40px;
      margin-bottom: 10px;
    }
    p {
      font-size: ${Theme.fontSize.medium};
    }
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    h2 {
      margin-top: 40px;
      margin-bottom: 10px;
    }
    p {
      font-size: ${Theme.fontSize.medium};
    }
  }
`;
