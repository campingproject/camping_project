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
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  white-space: pre-line;
`;

export const ContentBox = styled.div`
  border-radius: 1rem;
  border: 1px solid #9c9c9c;
  width: 20%;
  text-align: center;
  padding: 20px 0px;
  * {
    margin-top: 10px;
  }
`;

export const Star = styled.div`
  display: flex;
  margin: auto;
  width: 40%;
  justify-content: space-around;
`;

export const BoxText = styled.div`
  margin: 50px auto;
  font-size: 20px;
  font-weight: 600;
  width: 50%;
  white-space: pre-line;
  line-height: 25px;
`;
