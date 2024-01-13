import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 200%;
  right: 70%;
  z-index: 3;
  padding: 0px 12px;
  width: 130px;
  text-align: center;
  border: 1px solid #f2f1f1;
  border-radius: 24px;
  box-shadow: 3px 3px 3px gray;
  margin-top: 12px;
  background-color: white;
  font-family: sans-serif;
  div > p {
    margin: 50px 0px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  border-bottom: 2px solid #9e9d9d;
`;
