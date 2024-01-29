import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
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
    color: #676767;
  }
  hr {
    width: 85%;
  }
`;

export const Content = styled.div`
  width: 100%;
  margin: 30px 0px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 200px;
  grid-gap: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  width: 100%;
  border: 1px solid #9c9c9c;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  cursor: pointer;
`;

export const Picture = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  width: 100%;
`;

export const BoardContent = styled.div`
  width: 80%;
  padding: 5px 10px;
  div: first-child {
    height: 20%;
    font-weight: bold;
    font-size: 20px;
    width: 100%;
    overflow-x: hidden;
    white-space: nowrap;
  }
  div: nth-child(2) {
    height: 70%;
    width: 100%;
    padding: 20px 0px;
    white-space: auto;
    word-break: break-all;
    overflow-y: hidden;
    line-height: 18px;
    font-size: 14px;
  }
  div: last-child {
    height: 10%;
    font-size: 13px;
    font-weight: bold;
  }
`;

export const Footer = styled.div`
  margin: 10px auto;
  position: relative;
`;

export const RegisterImage = styled(Image)`
  position: absolute;
  right: 0;
  cursor: pointer;
`;
