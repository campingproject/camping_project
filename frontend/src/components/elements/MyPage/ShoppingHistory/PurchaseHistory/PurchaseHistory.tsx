import { useRouter } from 'next/navigation';
import HistoryBox from '../HistoryBox';
import { ItemPurchaseHistoryTypes } from '@/types/history';
import * as Styled from './PurchaseHistory.styles';

function PurchaseHistory({ data }: { data: ItemPurchaseHistoryTypes[] }) {
  const router = useRouter();

  // 구매한 제품 리스트 필터링
  const filteredList = data.filter((place) => place.isCancled === 'N');

  return (
    <Styled.Container>
      <h2>구매 내역</h2>
      <Styled.HistoryBoxWrap>
        {filteredList.map((item, index) => (
          <HistoryBox
            key={index}
            onClick={() => router.push(`/shop/item/${item.id}`)}
            imgSrc={item.thumbnail}
            name={item.name}
            purchaseDate={item.purchaseDate}
            paymentMethod={item.paymentMethod}
            seller={item.seller}
          />
        ))}
      </Styled.HistoryBoxWrap>
    </Styled.Container>
  );
}
export default PurchaseHistory;
