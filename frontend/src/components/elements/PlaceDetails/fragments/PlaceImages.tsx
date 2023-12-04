'use client';

import { placeSampleImg1, placeSampleImg2 } from '@/public/svgs';
import Image from 'next/image';
import { ImagesWrap } from './PlaceImages.styles';
// import Link from 'next/link';

interface PlaceImagesProps {
  modalOpen: boolean;
  onClick: React.MouseEventHandler;
}

function PlaceImages({ modalOpen, onClick }: PlaceImagesProps) {
  return (
    <ImagesWrap onClick={onClick} style={{ display: modalOpen ? 'none' : 'grid' }}>
      <Image src={placeSampleImg1} alt="image1" width={0} height={0} />
      <Image src={placeSampleImg2} alt="image2" width={0} height={0} />
      <Image src={placeSampleImg2} alt="image3" width={0} height={0} />
    </ImagesWrap>
  );
}
export default PlaceImages;
