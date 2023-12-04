import styled from 'styled-components';

export const EmblaCarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const EmblaCarouselSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
