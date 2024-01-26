import PageTitle from '@/components/common/Title/PageTitle';
import { prevArrowIcon } from '@/public/svgs';
import ImagesContainer from './ImagesContainer';
import useSWR from 'swr';
// import { WISH } from '@/constants/api';

function WishListMain() {
  const { data, isLoading, error } = useSWR('/api/mypage/wish/place');
  // const { data, isLoading, error } = useSWR(`${WISH.WISH_PLACE}`);
  // console.log(WISH.WISH_PLACE);
  console.log(data);
  if (error) {
    console.log('Fetch Error: ' + error);
    return <div>Error fetching data</div>;
  }
  if (isLoading) return <div>Loading...</div>;

  return (
    <main>
      <PageTitle title="찜한 내역" href="/mypage" iconSrc={prevArrowIcon} />
      <p>최근 6개월 간의 찜한 내역이 표시됩니다.</p>
      <ImagesContainer />
      <h2>찜한 아이템</h2>
      <p>최근 6개월 간의 찜한 아이템이 표시됩니다.</p>
    </main>
  );
}
export default WishListMain;
