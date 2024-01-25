import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { svgType } from "@/types";
import { useEffect, useState } from "react";
import Theme from "@/styles/theme";
import {
  Embla,
  EmblaContainer,
  SlidImg,
  Slide,
  Viewport,
} from "./Carousel.style";

export default function Carousel({ props }: { props: svgType[] }) {
  const [width, setWidth] = useState(0);
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
    if (window) setWidth(window.innerWidth);
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
                      width < Theme.window.mobile
                        ? item.width / 2
                        : Theme.window.mobile <= width &&
                          width < Theme.window.pc
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
