import styled from 'styled-components';
import Theme from '@/styles/theme';

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 50px 20px 50px;
  a {
    img {
      padding: 10px;
    }
  }
  h1 {
    font-size: ${Theme.fontSize.xxlarge};
    color: ${Theme.colors.gray500};
  }
`;
