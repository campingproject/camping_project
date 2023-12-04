import styled from 'styled-components';
import Theme from '@/styles/theme';

export const PlaceDescContainer = styled.section`
  width: 80vw;
  margin: auto;
  ul {
    margin-bottom: 10px;
    li:nth-child(1),
    li:nth-child(2) {
      margin-bottom: 5px;
      color: ${Theme.colors.gray500};
    }
    li:nth-child(1) {
      font-size: ${Theme.fontSize.large};
      font-weight: bold;
    }
    li:nth-child(2) {
      font-size: 1.1rem;
    }
    li:nth-child(3) {
      color: ${Theme.colors.gray400};
    }
  }
`;
