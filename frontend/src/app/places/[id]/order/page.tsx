'use client';

import { Header } from '@/components/Header';
import PageTitle from '@/components/common/Title/PageTitle';
import OrderInformation from '@/components/elements/Places/Order/OrderInformation';
import { prevArrowIcon } from '@/public/svgs';
import { useParams } from 'next/navigation';

function BookCampsite() {
  const params = useParams();

  return (
    <>
      <Header />
      <PageTitle href={`/places/${params.id}`} iconSrc={prevArrowIcon} title="예약하기" />
      <OrderInformation />
    </>
  );
}
export default BookCampsite;
