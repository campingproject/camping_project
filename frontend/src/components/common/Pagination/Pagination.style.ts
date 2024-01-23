import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
  }
`;

export const Arrow = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  margin: 0px 10px;
  font-size: 18px;
`;

export const PageNum = styled.span`
  margin: 0px 10px;
  cursor: pointer;
`;
