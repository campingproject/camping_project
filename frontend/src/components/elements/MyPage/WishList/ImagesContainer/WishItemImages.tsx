import Image from 'next/image';
import * as Styled from './ImagesContainer.styles';
import { useRouter } from 'next/navigation';
import { ShoppingItemTypes } from '@/types/shopping';

interface Props {
  data: ShoppingItemTypes[];
}

function WishItemImages({ data }: Props) {
  const router = useRouter();

  return (
    <Styled.Section>
      {data.map((item) => (
        <Styled.ImageWrap key={item.id} onClick={() => router.push(`/shop/${item.id}`)}>
          <Image src={item.thumbnail} alt="place_image" width="0" height="0" />
        </Styled.ImageWrap>
      ))}
    </Styled.Section>
  );
}
export default WishItemImages;
