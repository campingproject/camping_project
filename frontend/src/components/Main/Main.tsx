'use client';

import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import bestArr from './fragments/imageByIndex';

const Container = styled.div`
  border: 1px solid black;
  margin: auto;
  overflow: hidden;
  --slide-spacing: 1rem;
  --slide-size: 33%;
  --slide-height: 19rem;
  padding: 1.6rem;
`;

const ImgBox = styled.div`
  display: flex;
  width: 33%;
  .embla__slide_img {
    margin: 10px;
  }
`;

export default function Main() {
  const [viewportRef] = useEmblaCarousel({ loop: true, align: 'start' });
  return (
    <Container ref={viewportRef}>
      <ImgBox>
        {bestArr.map((v: any, index: number) => (
          <div className="embla__slide" key={index}>
            <Image className="embla__slide_img" src={v} alt="best1" defaultValue={1} />
          </div>
        ))}
      </ImgBox>
    </Container>
  );
}
