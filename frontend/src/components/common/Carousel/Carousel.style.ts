import { styled } from 'styled-components';

export const Embla = styled.div`
  --slide-spacing: 1rem;
  --slide-size: 32%;
  --slide-height: 19rem;
  width: 100%;
  height: 100%;
`;
export const Viewport = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
export const EmblaContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  width: 100%;
  height: 100%;
  // margin-left: calc(var(--slide-spacing) * -1);
`;

export const Slide = styled.div`
  flex: 0 0 var(--slide-size);
  padding-left: var(--slide-spacing);
  position: relative;
`;
export const SlidImg = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  text-align: center;
  & > first-child {
    width: 100%;
  }
`;
