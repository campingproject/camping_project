import Image from 'next/image';
import * as Styled from './HistoryBox.styles';

type Props = {
  onClick: React.MouseEventHandler;
  imgSrc: string;
  name: string;
  seller: string;
  paymentMethod: string;
  purchaseDate: string;
};
function HistoryBox({ onClick, imgSrc, name, seller, paymentMethod, purchaseDate }: Props) {
  return (
    <Styled.Container onClick={onClick}>
      <Image src={imgSrc} alt="image" width="0" height="0" />
      <Styled.TextWrap>
        <ul>
          <li>{name}</li>
          <li>판매자: {seller}</li>
          <li>결제방식: {paymentMethod}</li>
          <li>{purchaseDate}</li>
        </ul>
      </Styled.TextWrap>
    </Styled.Container>
  );
}
export default HistoryBox;
