'use client';
import { useState } from 'react';
import PlaceDescriptions from './fragments/PlaceDescriptions/PlaceDescriptions';
import PlaceImagesModal from './fragments/PlaceImagesModal/PlaceImagesModal';
import * as Styled from './PlaceDetail.styles';
import Image from 'next/image';
import { PlaceData } from '@/types/place';

interface PlaceDatilsProps {
  data: PlaceData;
}

function PlaceDetails({ data }: PlaceDatilsProps) {
  const [viewAllImages, setViewAllImages] = useState(false);

  // 사진 모두 보기 클릭한 경우 Modal Open
  const openModal = () => setViewAllImages(true);
  const closeModal = () => setViewAllImages(false);

  // 캠핑장 대표 이미지 3개만 출력
  const mainImages = data?.images.slice(0, 3);

  return (
    <Styled.Container>
      <Styled.ImagesWrap onClick={openModal}>
        {mainImages.map((image, i) => (
          <Image src={image} alt={image} width={0} height={0} key={i} priority />
        ))}
        <Styled.Button onClick={openModal}>사진 모두 보기</Styled.Button>
      </Styled.ImagesWrap>
      {viewAllImages && <PlaceImagesModal images={data?.images} closeModal={closeModal} />}
      <PlaceDescriptions viewAllImages={viewAllImages} placeData={data} />
    </Styled.Container>
  );
}

export default PlaceDetails;
