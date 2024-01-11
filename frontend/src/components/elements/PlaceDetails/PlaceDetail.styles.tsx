import styled from "styled-components";
import Theme from "@/styles/theme";

export const PlaceDetailContainer = styled.main`
  width: 100vw;
  margin: auto;
`;

export const ImagesWrap = styled.div`
  position: relative;
  width: 80vw;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  display: grid;
  grid-template-areas:
    "img1 img2"
    "img1 img3";
  grid-template-columns: 2fr 1fr;
  gap: 9px;
  img {
    max-width: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  img:hover {
    filter: brightness(80%);
  }
  img:nth-child(1) {
    grid-area: img1;
    max-height: 61.1vh;
  }
  img:nth-child(2) {
    grid-area: img2;
    max-height: 30vh;
  }
  img:nth-child(3) {
    grid-area: img3;
    max-height: 30vh;
  }

  @media screen and (max-width: ${Theme.screen.pc}) {
    img:nth-child(1) {
      object-fit: fill;
      height: 100%;
      width: 100%;
    }
    img:nth-child(2),
    img:nth-child(3) {
      display: none;
    }
    grid-template-areas:
      "img1 img1"
      "img1 img1";
  }

  @media screen and (max-width: ${Theme.screen.pc}) {
    img:nth-child(1) {
      object-fit: fill;
      height: 100%;
    }
    img:nth-child(2),
    img:nth-child(3) {
      display: none;
    }
  }
`;

export const ButtonStyled = styled.button`
  position: absolute;
  top: 54vh;
  left: 70vw;
  border-radius: 15px;
  border: none;
  width: 110px;
  height: 33px;
  font-weight: bold;
  cursor: pointer;
  visibility: visible;

  @media screen and (max-width: ${Theme.screen.pc}) {
    visibility: hidden;
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    visibility: hidden;
  }
`;
