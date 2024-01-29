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
    width: 90%;
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    width: 90%;
  }
`;
export const SubTitleWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 30px;
`;
export const HistoryBoxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
