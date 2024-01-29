import styled from 'styled-components';
import Theme from '@/styles/theme';

export const Container = styled.div`
  width: 83%;
  margin: auto;
  h2 {
    font-size: ${Theme.fontSize.xlarge};
    margin-left: 20px;
    color: ${Theme.colors.gray400};
  }
  @media screen and (max-width: ${Theme.screen.tablet}) {
    width: 85%;
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    width: 85%;
  }
`;

export const HistoryBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
