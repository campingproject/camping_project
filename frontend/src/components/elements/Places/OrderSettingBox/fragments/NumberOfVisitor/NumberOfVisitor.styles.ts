import Theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  border-top: 1px solid ${Theme.colors.gray200};
  h1 {
    font-size: ${Theme.fontSize.large};
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  padding-top: 15px;

  @media screen and (max-width: ${Theme.screen.tablet}) {
    gap: 20px;
  }
  @media screen and (max-width: ${Theme.screen.mobile}) {
    gap: 20px;
  }
`;

export const WrapAgeGroup = styled.div`
  width: 32vw;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: ${Theme.screen.mobile}) {
    width: 100%;
  }
`;
