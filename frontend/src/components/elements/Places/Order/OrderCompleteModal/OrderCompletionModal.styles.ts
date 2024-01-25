import styled from 'styled-components';
import Theme from '@/styles/theme';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  img {
    width: 13px;
    height: 13px;
  }
  ul {
    padding: 20px;
    text-align: center;

    li:nth-child(1) {
      font-size: ${Theme.fontSize.large};
      margin-bottom: 15px;
    }
    li:nth-child(2) {
      color: #bb2727;
      margin-bottom: 15px;
    }
    li:nth-child(3) {
      font-size: ${Theme.fontSize.xsmall};
      color: ${Theme.colors.gray400};
      margin-bottom: 5px;
    }
    li:nth-child(4) {
      font-size: ${Theme.fontSize.xsmall};
      color: ${Theme.colors.gray400};
    }
  }
`;
