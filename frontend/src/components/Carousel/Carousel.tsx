import styled from "styled-components";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { svgType } from "@/types";

const Embla = styled.div`
  --slide-spacing: 1rem;
  --slide-size: 32%;
  --slide-height: 19rem;
  width: 100%;
  height: 100%;
`;
const Viewport = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const EmblaContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  width: 100%;
  height: 100%;
  margin-left: calc(var(--slide-spacing) * -1);
`;

const Slide = styled.div`
  flex: 0 0 var(--slide-size);
  padding-left: var(--slide-spacing);
  position: relative;
`;
const SlidImg = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  text-align: center;
`;

export default function Carousel({ props }: { props: svgType[] }) {
  const [viewportRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  });
  console.log(props);
  return (
    <Embla>
      <Viewport ref={viewportRef}>
        <EmblaContainer>
          {props.map((item: any, index: any) => (
            <Slide key={index}>
              <SlidImg>
                <Image
                  src={item.src}
                  alt={item.src}
                  width={item.width}
                  height={item.height}
                />
                <span>description</span>
              </SlidImg>
            </Slide>
          ))}
        </EmblaContainer>
      </Viewport>
    </Embla>
  );
}
