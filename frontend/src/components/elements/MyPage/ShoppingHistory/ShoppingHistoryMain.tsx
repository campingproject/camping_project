'use client';

import { prevArrowIcon } from '@/public/svgs';
import Title from '@/components/common/Title';
import PurchaseHistory from './PurchaseHistory/PurchaseHistory';
import { ITEMS_HISTORY_END_POINT } from '@/constants/api';
import useSWR from 'swr';

function ShoppingHistoryMain() {
  const { data, isLoading, error } = useSWR(ITEMS_HISTORY_END_POINT.ITMES_PURCHASE_HISTORY());

  if (error) {
    console.log('Item Data Fetch Error: ' + error);
    return <div>Error fetching items.</div>;
  }
  if (isLoading) return <div>Loading...</div>;
  console.log(data);

  return (
    <main>
      <Title title="쇼핑내역" iconSrc={prevArrowIcon} href="/mypage" />
      <PurchaseHistory data={data} />
    </main>
  );
}
export default ShoppingHistoryMain;
