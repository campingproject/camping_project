import Image from 'next/image';
import { PlaceDataTypes } from '@/types/place';
import * as Styled from './ImagesContainer.styles';
import { useRouter } from 'next/navigation';

interface Props {
  data: PlaceDataTypes[];
}

function WishPlaceImages({ data }: Props) {
  const router = useRouter();

  return (
    <Styled.Section>
      {data.map((item) => (
        <Styled.ImageWrap key={item.id} onClick={() => router.push(`/places/${item.id}`)}>
          <Image src={item.thumbnail} alt="place_image" width="0" height="0" />
        </Styled.ImageWrap>
      ))}
    </Styled.Section>
  );
}
export default WishPlaceImages;
