import Image from 'next/image';
import * as Styled from './LinkBox.styles';

type Props = {
  onClick: React.MouseEventHandler;
  imgSrc: string;
  title: string;
  desc: string;
};
function LinkBox({ onClick, imgSrc, title, desc }: Props) {
  return (
    <Styled.Container onClick={onClick}>
      <Image src={imgSrc} alt="icon" width={0} height={0} />
      <Styled.TextWrap>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Desc>{desc}</Styled.Desc>
      </Styled.TextWrap>
    </Styled.Container>
  );
}
export default LinkBox;
