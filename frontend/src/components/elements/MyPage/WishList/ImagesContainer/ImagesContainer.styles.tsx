import Theme from '@/styles/theme';
import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  max-width: 80%;
  margin: 0 auto;
  @media screen and (max-width: ${Theme.screen.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;
  }
`;

export const ImageWrap = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    cursor: pointer;
    filter: brightness(60%);
  }
`;
