"use client";

import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";

const Container = styled.div`
  width: 80%;
  margin: auto;
  border: 1px solid black;
  padding: 10px;
  overflow: hidden;
`;

const ImgBox = styled.div`
  display: flex;
  flex-wrap: no-wrap;
`;

const Img = styled.div`
  margin: 10px;
  width: 150px;
  height: 100px;
  border: 1px solid black;
  flex: 0 0 100%;
`;

export default function Main() {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true });
  return (
    <Container ref={viewportRef}>
      <ImgBox>
        {Array.from({ length: 12 }, (_, index) => (
          <Img key={index}>main</Img>
        ))}
      </ImgBox>
    </Container>
  );
}
