import styled from "styled-components";

interface DeviceProps {
  mobile: number;
  tablet: number;
}

export const Sizes: DeviceProps = {
  mobile: 480,
  tablet: 1024,
};

export const Container = styled.div`
  position: relative;
  max-width: 90%;
  width: 100%;
  margin: auto;
  margin-top: 100px;
  padding-bottom: 5px;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-weight: bold;
    width: 15%;
  }
  hr {
    width: 85%;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 20px;
`;
