import styled from "styled-components";
import Image from "next/image";

const Embla = styled.div`
  --slide-spacing: 1rem;
  --slide-size: 33%;
  --slide-height: 19rem;
  position: relative;
`;
const Viewport = styled.div`
  overflow: hidden;
`;
const Container = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -1);
`;

const Slide = styled.div`
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  position: relative;
`;
const SlidImg = styled.div`
  display: block;
  height: var(--slide-height);
  width: 100%;
  object-fit: cover;
`;

export default function Carousel({ props }: { props: any }) {
  console.log(props);
  return (
    <Embla>
      <Viewport>
        <Container>
          {props.map((item: any, index: any) => (
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
        </Container>
      </Viewport>
    </Embla>
  );
}
