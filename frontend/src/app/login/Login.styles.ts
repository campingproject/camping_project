import styled from 'styled-components';
import Theme from '@/styles/theme';

const color = {
  kakaoLogo: '#391B1B',
  naverLogo: '#FFFFFF',
  kakaoBackground: '#FAE300',
  naverBackground: '#03CF5D',
};
const size = {
  buttonWidth: '22vw',
  buttonHeight: '6.5vh',
  tabletButtonWidth: '35vw',
  tableButtonHeight: '5.2vh',
  mobileButtonWidth: '72vw',
  mobileButtonHeight: '7.5vh',
};
export const StyledMain = styled.main`
  text-align: center;

  h1 {
    font-size: 1.4rem;
    color: ${Theme.colors.gray400};
    margin-top: 15vh;
    margin-bottom: 1.5vh;
  }
  p {
    font-size: 1rem;
    color: ${Theme.colors.gray400};
    margin-bottom: 3vh;
  }
  section {
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: auto;

    button {
      font-size: 1rem;
      width: ${size.buttonWidth};
      height: ${size.buttonHeight};
      border-radius: 12px;
      margin: auto;
      margin-bottom: 0.7rem;
      border: none;
      display: flex;
      justify-content: left;
      align-items: center;
      cursor: pointer;

      &.kakao_login_button {
        color: ${color.kakaoLogo};
        background-color: ${color.kakaoBackground};
      }
      &.naver_login_button {
        color: ${color.naverLogo};
        background-color: ${color.naverBackground};
        img {
          width: 24px;
        }
      }
      img {
        position: absolute;
        margin-left: 0.9rem;
      }
      span {
        margin: auto;
      }
    }

    a {
      color: ${Theme.colors.gray400};
      text-decoration: none;
      font-size: ${Theme.fontSize.small};
      margin-top: 1rem;
    }
  }

  @media (max-width: ${Theme.screen.tablet}) {
    section {
      button {
        width: ${size.tabletButtonWidth};
        height: ${size.tableButtonHeight};
      }
    }
  }

  @media (max-width: ${Theme.screen.mobile}) {
    section {
      button {
        width: ${size.mobileButtonWidth};
        height: ${size.mobileButtonHeight};
      }
    }
  }
`;
