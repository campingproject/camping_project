import Image from 'next/image';
import * as Styled from './OrderCompletionModal.styles';
import { prevArrowIcon } from '@/public/svgs';

type Props = {
  onClose: React.MouseEventHandler;
  orderNumber: string;
};
function OrderCompletionModal({ onClose, orderNumber }: Props) {
  return (
    <Styled.ModalContainer onClick={onClose}>
      <Styled.ModalContent onClick={(e) => e.stopPropagation()}>
        <Image src={prevArrowIcon} alt="prevArrowIcon" onClick={onClose} />
        <ul>
          <li>예약이 완료되었습니다!</li>
          <li>예약번호 {orderNumber}</li>
          <li>예약이 완료되었습니다.</li>
          <li>예약 내역은 [마이페이지 - 예약 내역 확인]에서 다시 확인할 수 있습니다.</li>
        </ul>
      </Styled.ModalContent>
    </Styled.ModalContainer>
  );
}
export default OrderCompletionModal;
