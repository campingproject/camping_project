import Theme from '@/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  width: 530px;
  height: 230px;
  border: 1px solid ${Theme.colors.gray300};
  border-radius: 10px;
  padding: 15px;
  margin: auto;
  img {
    width: 50px;
    height: 50px;
  }
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: ${Theme.screen.tablet}) {
    width: 100%;
    height: 140px;
    img {
      width: 40px;
      height: 40px;
    }
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    width: 100%;
    height: 130px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const TextWrap = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: ${Theme.screen.tablet}) {
    margin-top: 18px;
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    margin-top: 20px;
  }
`;

export const Title = styled.p`
  color: ${Theme.colors.black};
  font-size: ${Theme.fontSize.large};
`;

export const Desc = styled.p`
  color: ${Theme.colors.gray400};
  font-size: ${Theme.fontSize.medium};
`;
