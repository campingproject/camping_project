import styled from 'styled-components';
import Theme from '@/styles/theme';

export const Container = styled.section`
  width: 42vw;
  border-radius: 20px;
  border: 1px solid ${Theme.colors.gray300};
  padding: 25px;
  @media screen and (max-width: ${Theme.screen.tablet}) {
    width: 85vw;
    margin: auto;
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    width: 85vw;
    margin: auto;
  }
`;

export const CampsiteInfoWrap = styled.div`
  display: flex;
  gap: 15px;
  img {
    width: 7vw;
    height: 7vw;
    object-fit: cover;
    border-radius: 10px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    li {
      font-size: ${Theme.fontSize.xsmall};
    }
    li:nth-child(1) {
      font-size: ${Theme.fontSize.large};
      font-weight: bold;
      margin-bottom: 5px;
    }
  }

  @media screen and (max-width: ${Theme.screen.tablet}) {
    img {
      width: 20vw;
      height: 20vw;
    }
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    img {
      width: 20vw;
      height: 20vw;
    }
  }
`;

export const PeriodWrap = styled.div`
  padding: 20px;
  margin: 20px 0px 20px 0px;
  border-radius: 15px;
  border: 1px solid ${Theme.colors.gray350};
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    font-size: ${Theme.fontSize.small};
  }
  ul {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    li:nth-child(1) {
      font-size: ${Theme.fontSize.small};
    }
    li:nth-child(2) {
      font-size: ${Theme.fontSize.medium};
    }
    li:nth-child(3) {
      font-size: ${Theme.fontSize.xsmall};
    }
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h2 {
    font-size: ${Theme.fontSize.large};
    font-weight: bold;
    margin-bottom: 5px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    font-size: ${Theme.fontSize.small};
    li {
    }
  }
`;
