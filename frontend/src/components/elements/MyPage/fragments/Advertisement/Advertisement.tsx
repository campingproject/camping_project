import { advertisementBanner } from '@/public/images';
import Image from 'next/image';
import * as Styled from './Advertisement.styles';

function Advertisement() {
  return (
    <Styled.Container>
      <Image src={advertisementBanner} alt="ad_banner" width="0" height="0" />
    </Styled.Container>
  );
}
export default Advertisement;
