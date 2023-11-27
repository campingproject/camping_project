import Theme from '@/styles/theme';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  max-width: ${Theme.screen.tablet};
`;
