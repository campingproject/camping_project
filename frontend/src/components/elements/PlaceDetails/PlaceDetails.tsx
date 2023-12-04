'use client';
import { placeSampleImg1, placeSampleImg2 } from '@/public/svgs';
import PlaceDescriptions from './fragments/PlaceDescriptions';
import PlaceImages from './fragments/PlaceImages';
import { useState } from 'react';
import styled from 'styled-components';
import PlaceImageModal from './fragments/PlaceImageModal';

function PlaceDetails() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const images = [placeSampleImg1, placeSampleImg2];

  return (
    <>
      <PlaceImages modalOpen={modalOpen} onClick={openModal} />
      <ButtonStyled style={{ display: modalOpen ? 'none' : 'block' }} onClick={openModal}>
        사진 모두 보기
      </ButtonStyled>
      {modalOpen && <PlaceImageModal images={images} closeModal={closeModal} />}
      <PlaceDescriptions modalOpen={modalOpen} />

      <section style={{ display: modalOpen ? 'none' : 'block' }}>예약 정보 컴포넌트</section>
    </>
  );
}
export default PlaceDetails;

export const ButtonStyled = styled.button`
  position: absolute;
  top: 77vh;
  left: 79vw;
  border-radius: 15px;
  border: none;
  width: 110px;
  height: 33px;
  font-weight: bold;
  cursor: pointer;
`;
