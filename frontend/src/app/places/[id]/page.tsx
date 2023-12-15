'use client';
import { Header } from '@/components/Header';
import PlaceDetails from '@/components/elements/PlaceDetails';
import { useParams } from 'next/navigation';
import useSWR from 'swr';

function PlaceDetailPage() {
  const params = useParams();
  const placeId = params.id;

  const { data, isLoading, error } = useSWR(`/api/places/${placeId}`);

  if (error) {
    console.log('Fetch Error: ' + error);
    return <div>Error fetching data</div>;
  }
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <PlaceDetails data={data} />
    </>
  );
}
export default PlaceDetailPage;
