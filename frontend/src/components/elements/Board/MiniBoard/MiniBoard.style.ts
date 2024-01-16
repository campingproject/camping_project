import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  margin: 30px 0px;
  width: 100%;
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
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 50px;
  overflow-x: auto;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    width: 5px; /* 세로축 스크롤바 폭 너비 */
    height: 15px; /* 가로축 스크롤바 폭 너비 */
  }
  &::-webkit-scrollbar-thumb {
    background: #f5cc68; /* 스크롤바 막대 색상 */
    border-radius: 12px 12px 12px 12px;
  }
`;

export const ContentBox = styled.div`
  border-radius: 1rem;
  border: 1px solid #9c9c9c;
  cursor: pointer;
  min-width: 20%;
  text-align: center;
  padding: 20px 0px;
  margin-right: 100px;
  * {
    margin-top: 10px;
  }
  &:last-child {
    margin-right: 0px;
  }
  p {
    font-size: 15px;
    font-weight: bold;
    font-family: sans-serif;
  }
  @media screen and (min-width: 480px) and (max-width: 768px) {
    min-width: 50%;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    min-width: 30%;
  }
  @media screen and (max-width: 479px) {
    min-width: 100%;
  }
`;

export const StyledImage = styled(Image)`
  width: 70%;
`;

export const Star = styled.div`
  display: flex;
  margin: auto;
  width: 30%;
  justify-content: space-around;
  > span {
    font-size: 25px;
    color: gold;
  }
`;

export const BoxText = styled.div`
  margin: 50px auto;
  font-size: 20px;
  font-weight: 600;
  width: 50%;
  white-space: pre-line;
  line-height: 25px;
`;
