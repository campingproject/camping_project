'use client';
import { useState } from 'react';
import PlaceDescriptions from './fragments/PlaceDescriptions';
import PlaceImagesModal from './fragments/PlaceImagesModal';
import { ButtonStyled, ImagesWrap, PlaceDetailContainer } from './PlaceDetail.styles';
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
    <PlaceDetailContainer>
      <ImagesWrap onClick={openModal} style={{ display: viewAllImages ? 'none' : 'grid' }}>
        {mainImages.map((image, i) => (
          <Image src={image} alt={image} width={0} height={0} key={i} priority />
        ))}
        <ButtonStyled style={{ display: viewAllImages ? 'none' : 'block' }} onClick={openModal}>
          사진 모두 보기
        </ButtonStyled>
      </ImagesWrap>
      {viewAllImages && <PlaceImagesModal images={data?.images} closeModal={closeModal} />}
      <PlaceDescriptions viewAllImages={viewAllImages} placeData={data} />

      {/* <section style={{ display: viewAllImages ? 'none' : 'block' }}>예약 정보 컴포넌트</section> */}
    </PlaceDetailContainer>
  );
}

export default PlaceDetails;
