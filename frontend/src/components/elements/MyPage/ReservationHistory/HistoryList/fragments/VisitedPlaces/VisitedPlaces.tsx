import { PlaceHistoryTypes } from '@/types/history';
import HistoryBox from '../HistoryBox';
import * as Styled from '../PlacesHistory.styles';
import { useRouter } from 'next/navigation';

function VisitedPlaces({ data }: { data: PlaceHistoryTypes[] }) {
  const router = useRouter();

  // 취소아닌 방문한 곳들만 리스트 필터링
  const filteredList = data.filter((place) => place.isCancled === 'N');

  return (
    <Styled.Container>
      <Styled.SubTitleWrap>
        <h2>방문 내역</h2>
        <button>더보기</button>
      </Styled.SubTitleWrap>
      <Styled.HistoryBoxWrap>
        {filteredList.map((place, index) => (
          <HistoryBox
            key={index}
            onClick={() => router.push(`/places/${place.id}`)}
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
export default VisitedPlaces;
