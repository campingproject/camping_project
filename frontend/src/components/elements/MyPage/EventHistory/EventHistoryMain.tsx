import Title from '@/components/common/Title';
import { prevArrowIcon } from '@/public/svgs';

function EventHistoryMain() {
  return (
    <main>
      <Title title="이벤트 내역" iconSrc={prevArrowIcon} href="/mypage" />
    </main>
  );
}
export default EventHistoryMain;
