import Image from 'next/image';
import { prevArrowIcon } from '@/public/svgs';
import { useState } from 'react';
import CarouselModal from '../CarouselModal/CarouselModal';
import * as Styled from './PlaceImagesModal.styles';

interface Modal {
  images: string[];
  closeModal: React.MouseEventHandler;
}

function PlaceImagesModal({ images, closeModal }: Modal) {
  const [slideModal, setSlideModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openSlideModal = (index: number) => {
    setSelectedImageIndex(index);
    setSlideModal(true);
  };

  const closeSlideModal = () => {
    setSelectedImageIndex(null);
    setSlideModal(false);
  };

  return (
    <>
      {!slideModal && (
        <Styled.ModalBox>
          <Styled.ModalContent>
            <button onClick={closeModal}>
              <Image
                className="prev_icon"
                src={prevArrowIcon}
                alt="prev_icon"
                width={14}
                height={14}
              />
              뒤로가기
            </button>
            <div className="image-grid">
              {images.map((image, index) => (
                <div className="image_wrap" key={index} onClick={() => openSlideModal(index)}>
                  <Image src={image} alt={`image_${index + 1}`} width={0} height={0} />
                </div>
              ))}
            </div>
          </Styled.ModalContent>
        </Styled.ModalBox>
      )}
      {slideModal && (
        <CarouselModal
          images={images}
          currentIndex={selectedImageIndex}
          onClose={closeSlideModal}
        />
      )}
    </>
  );
}

export default PlaceImagesModal;
