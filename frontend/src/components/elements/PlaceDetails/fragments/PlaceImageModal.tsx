import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { EmblaCarouselContainer, EmblaCarouselSlide } from './PlaceImageModal.styles';

interface Modal {
  images: string[];
  closeModal: React.MouseEventHandler;
}

function PlaceImageModal({ images, closeModal }: Modal) {
  const [viewportRef, embla] = useEmblaCarousel();

  return (
    <section>
      <button onClick={closeModal}>뒤로가기</button>
      <EmblaCarouselContainer ref={viewportRef}>
        {images.map((image, index) => (
          <EmblaCarouselSlide key={index}>
            <Image src={image} alt={`Slide ${index + 1}`} width={0} height={0} />
          </EmblaCarouselSlide>
        ))}
      </EmblaCarouselContainer>
    </section>
  );
}
export default PlaceImageModal;
