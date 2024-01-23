import Theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.main`
  width: 90vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${Theme.screen.tablet}) {
    flex-direction: column;
    gap: 40px;
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    flex-direction: column;
    gap: 40px;
  }
`;
