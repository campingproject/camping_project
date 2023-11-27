import styled from "styled-components";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { svgType } from "@/types";
import { useEffect, useState } from "react";
import { Sizes } from "@/styles";

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
  & > first-child {
    width: 100%;
  }
`;

export default function Carousel({ props }: { props: svgType[] }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [imageWidth, setImageWidth] = useState(0);
  const [viewportRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  });

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Embla>
      <Viewport ref={viewportRef}>
        <EmblaContainer>
          {props.map((item: any, index: any) => (
            <Slide key={index}>
              <SlidImg>
                <div>
                  <Image
                    src={item.src}
                    alt={item.src}
                    width={
                      width < Sizes.mobile
                        ? item.width / 2
                        : Sizes.mobile <= width && width < Sizes.tablet
                        ? (item.width * 2) / 3
                        : item.width
                    }
                    height={item.height}
                  />
                </div>
                <span>description</span>
              </SlidImg>
            </Slide>
          ))}
        </EmblaContainer>
      </Viewport>
    </Embla>
  );
}
