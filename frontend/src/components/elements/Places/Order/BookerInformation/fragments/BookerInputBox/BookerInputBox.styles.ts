import styled from 'styled-components';
import Theme from '@/styles/theme';

export const InputWrap = styled.div`
  width: 330px;
  margin: auto;
  display: flex;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: ${Theme.fontSize.small};
  label {
    display: flex;
    width: 100px;
    align-items: center;
  }
  input {
    width: 230px;
    border-radius: 3px;
    border: 1px solid ${Theme.colors.gray200};
  }

  @media screen and (max-width: ${Theme.screen.tablet}) {
    /* flex-direction: column; */
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
  }
`;
