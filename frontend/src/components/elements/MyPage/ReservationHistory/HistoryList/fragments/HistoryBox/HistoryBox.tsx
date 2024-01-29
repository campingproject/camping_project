import Image from 'next/image';
import * as Styled from './HistoryBox.styles';

type Props = {
  onClick: React.MouseEventHandler;
  imgSrc: string;
  name: string;
  host: string;
  period: string;
};
function HistoryBox({ onClick, imgSrc, name, host, period }: Props) {
  return (
    <Styled.Container onClick={onClick}>
      <Image src={imgSrc} alt="image" width="0" height="0" />
      <Styled.TextWrap>
        <ul>
          <li>{name}</li>
          <li>호스트: {host}</li>
          <li>{period}</li>
        </ul>
      </Styled.TextWrap>
    </Styled.Container>
  );
}
export default HistoryBox;
