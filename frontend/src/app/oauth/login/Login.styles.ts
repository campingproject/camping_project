import styled from 'styled-components';

const color = {
  textColor: '#5f5f5f',
  kakaoLogo: '#391B1B',
  naverLogo: '#FFFFFF',
  kakaoBackground: '#FAE300',
  naverBackground: '#03CF5D',
};
const size = {
  buttonWidth: '30vw',
  buttonHeight: '7vh',
  // mediaButtonWidth: '50vw',
};
export const StyledMain = styled.main`
  text-align: center;

  h1 {
    font-size: 1.5rem;
    color: ${color.textColor};
    margin-top: 15vh;
  }
  p {
    font-size: 1rem;
    color: ${color.textColor};
  }
  section {
    width: 40vw;
    display: flex;
    flex-direction: column;
    margin: auto;

    button {
      font-size: 1rem;
      width: ${size.buttonWidth};
      height: ${size.buttonHeight};
      border-radius: 15px;
      margin: auto;
      margin-bottom: 0.9rem;
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
          width: 1.8rem;
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
      color: ${color.textColor};
      text-decoration: none;
    }
  }
`;
