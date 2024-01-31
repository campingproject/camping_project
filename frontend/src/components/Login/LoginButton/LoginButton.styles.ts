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
  tabletButtonWidth: '52vw',
  tableButtonHeight: '5.7vh',
  mobileButtonWidth: '72vw',
  mobileButtonHeight: '7.5vh',
};

export const Button = styled.button`
  font-size: 1rem;
  width: ${size.buttonWidth};
  height: ${size.buttonHeight};
  border-radius: 12px;
  margin: auto;
  margin-bottom: 0.5rem;
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
      height: 24px;
    }
  }
  img {
    position: absolute;
    margin-left: 0.5rem;
  }
  span {
    margin: auto;
  }
`;
