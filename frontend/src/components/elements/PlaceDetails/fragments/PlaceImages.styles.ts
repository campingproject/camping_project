import Theme from '@/styles/theme';
import styled from 'styled-components';

export const ImagesWrap = styled.div`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80vw;
  display: grid;
  grid-template-areas:
    'img1 img2'
    'img1 img3';
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 35vh);
  gap: 9px;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
  img:hover {
    filter: brightness(80%);
  }
  img:nth-child(1) {
    grid-area: img1;
  }
  img:nth-child(2) {
    grid-area: img2;
  }
  img:nth-child(3) {
    grid-area: img3;
  }
`;
