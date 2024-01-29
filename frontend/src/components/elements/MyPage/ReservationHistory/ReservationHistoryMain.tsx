import Title from '@/components/common/Title';
import { prevArrowIcon } from '@/public/svgs';
import HistoryList from './HistoryList/HistoryList';

function ReservationHistoryMain() {
  return (
    <main>
      <Title title="예약내역" iconSrc={prevArrowIcon} href="/mypage" />
      <HistoryList />
    </main>
  );
}
export default ReservationHistoryMain;
