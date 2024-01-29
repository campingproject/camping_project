import { PlaceHistoryTypes } from '@/types/history';
import HistoryBox from '../HistoryBox';
import * as Styled from '../PlacesHistory.styles';
import { useRouter } from 'next/navigation';

function CancledPlaces({ data }: { data: PlaceHistoryTypes[] }) {
  const router = useRouter();

  // 취소된 예약 내역만 필터링
  const filteredList = data.filter((place) => place.isCancled === 'Y');

  return (
    <Styled.Container>
      <Styled.SubTitleWrap>
        <h2>취소 내역</h2>
        <button>더보기</button>
      </Styled.SubTitleWrap>
      <Styled.HistoryBoxWrap>
        {filteredList.map((place, index) => (
          <HistoryBox
            onClick={() => router.push(`/places/${place.id}`)}
            key={index}
            imgSrc={place.thumbnail}
            name={place.name}
            host={place.host}
            period={`${place.checkInDate} ~ ${place.checkOutDate}`}
          />
        ))}
      </Styled.HistoryBoxWrap>
    </Styled.Container>
  );
}
export default CancledPlaces;
