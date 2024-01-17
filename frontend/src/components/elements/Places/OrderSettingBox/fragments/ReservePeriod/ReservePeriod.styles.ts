import styled from 'styled-components';
import Theme from '@/styles/theme';

export const Container = styled.div`
  display: flex;
  padding: 15px;
  ul:nth-child(2) {
    border-left: 1px solid ${Theme.colors.gray200};
    padding-left: 15px;
    margin: auto;
  }
  li {
    padding: 2px;
    font-size: ${Theme.fontSize.large};
  }
  li:nth-child(2) {
    padding-top: 6px;
    font-size: ${Theme.fontSize.medium};
  }

  @media screen and (max-width: ${Theme.screen.tablet}) {
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    li {
      padding: 2px;
      font-size: ${Theme.fontSize.medium};
    }
    li:nth-child(2) {
      padding-top: 6px;
      font-size: ${Theme.fontSize.small};
    }
  }
`;
