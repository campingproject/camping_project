'use client';
import useSWR from 'swr';
import CancledPlaces from './fragments/CancledPlaces';
import VisitedPlaces from './fragments/VisitedPlaces';
import { PLACES_HISTORY_END_POINT } from '@/constants/api';

function HistoryList() {
  const { data, isLoading, error } = useSWR(PLACES_HISTORY_END_POINT.PLACES_HISTORY());

  if (error) {
    console.log('Item Data Fetch Error: ' + error);
    return <div>Error fetching items.</div>;
  }
  if (isLoading) return <div>Loading...</div>;

  console.log(data);
  return (
    <section>
      <VisitedPlaces data={data} />
      <CancledPlaces data={data} />
    </section>
  );
}
export default HistoryList;
