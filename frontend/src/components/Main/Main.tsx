"use client";

import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import bestArr from "./fragments/imageByIndex";
import { NextButton, PrevButton } from "./fragments/CarouselButton";

const Container = styled.div`
  position: relative;
`;

const ImgBox = styled.div`
  display: flex;
  width: 33%;
  margin: 10px;
`;

const Embla = styled.div`
  --slide-spacing: 1rem;
  --slide-size: 33%;
  --slide-height: 19rem;
  position: relative;
  width: 100%;
  margin: auto;
`;
const Viewport = styled.div`
  overflow: hidden;
`;
const EmblaContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -2);
`;

const Slide = styled.div`
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  position: relative;
`;
const SlidImg = styled.div`
  display: block;
  width: 100%;
  object-fit: cover;
  text-align: center;
`;

export default function Main() {
  const [viewportRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  });
  console.log(bestArr);
  return (
    <Container>
      <Embla>
        <Viewport ref={viewportRef}>
          <EmblaContainer>
            {bestArr.map((item: any, index: any) => (
              <Slide key={index}>
                <SlidImg>
                  <Image
                    src={item.src}
                    alt={item.src}
                    width={item.width}
                    height={item.height}
                  />
                </SlidImg>
              </Slide>
            ))}
          </EmblaContainer>
        </Viewport>
      </Embla>
      <PrevButton />
      <NextButton />
    </Container>
  );
}
