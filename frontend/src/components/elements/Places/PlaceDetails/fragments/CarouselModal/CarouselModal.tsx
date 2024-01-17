import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import * as Styled from './CarouselModal.styles';
import { prevImageIcon, nextImageIcon } from '@/public/svgs';

interface CarouselModalProp {
  images: string[];
  currentIndex: number | null;
  onClose: () => void;
}

function CarouselModal({ images, currentIndex, onClose }: CarouselModalProp) {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(currentIndex);
  const totalImagesCount = images.length;

  useEffect(() => {
    if (embla && currentIndex !== null) {
      embla.scrollTo(currentIndex);
      setSelectedImageIndex(currentIndex);
    }
  }, [embla, currentIndex]);

  const handlePrev = () => {
    if (embla) {
      let newIndex = selectedImageIndex;
      if (newIndex !== null) {
        // 이미지 인덱스가 첫 번째이면, 마지막 번째 이미지로 이동
        if (selectedImageIndex === 0) newIndex = totalImagesCount - 1;
        else newIndex--;
      }
      setSelectedImageIndex(newIndex);
      embla.scrollPrev();
    }
  };

  const handleNext = () => {
    if (embla) {
      let newIndex = selectedImageIndex;
      if (newIndex !== null) {
        // 이미지 인덱스가 마지막 이미지면 첫 번째 이미지로 이동
        newIndex = (newIndex + 1) % totalImagesCount;
      }
      setSelectedImageIndex(newIndex);
      embla.scrollNext();
    }
  };

  return (
    <Styled.CarouselModalBox>
      <Styled.CarouselModalContent>
        <button className="close_button" onClick={onClose}>
          ✕ 닫기
        </button>
        <Styled.ImageIndex>{`${
          selectedImageIndex !== null ? selectedImageIndex + 1 : ''
        } / ${totalImagesCount}`}</Styled.ImageIndex>
        <Styled.CarouselContainer ref={viewportRef}>
          <button onClick={handlePrev}>
            <Image src={prevImageIcon} alt="prevImageIcon" />
          </button>
          {images.map((image, index) => (
            <div
              className="embla_slide"
              key={index}
              style={{ display: index === selectedImageIndex ? 'block' : 'none' }}
            >
              <Image src={image} alt={`image_${index + 1}`} width={0} height={0} />
            </div>
          ))}
          <button onClick={handleNext}>
            <Image src={nextImageIcon} alt="nextImageIcon" />
          </button>
        </Styled.CarouselContainer>
      </Styled.CarouselModalContent>
    </Styled.CarouselModalBox>
  );
}

export default CarouselModal;
