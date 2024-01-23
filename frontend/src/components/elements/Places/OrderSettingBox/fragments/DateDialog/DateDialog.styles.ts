import Theme from '@/styles/theme';
import styled from 'styled-components';

export const Dialog = styled.dialog`
  position: absolute;
  top: 121%;
  left: -16%;
  z-index: 1;
  display: block;
  padding: 24px;
  border: 1px solid ${Theme.colors.gray200};
  border-radius: 24px;
  margin-top: 12px;
  box-shadow: 0px 0px 5px 0px ${Theme.colors.gray200};

  @media screen and (max-width: ${Theme.screen.mobile}) {
    top: 80%;
    left: 8%;
  }
`;
