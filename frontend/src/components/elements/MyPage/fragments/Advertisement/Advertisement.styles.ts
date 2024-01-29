import Theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  img {
    margin-top: 50px;
    width: 1100px;
    height: fit-content;
  }
  @media screen and (max-width: ${Theme.screen.tablet}) {
    img {
      margin-top: 30px;
      width: 100%;
      height: fit-content;
    }
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    img {
      margin-top: 30px;
      width: 100%;
      height: fit-content;
    }
  }
`;
