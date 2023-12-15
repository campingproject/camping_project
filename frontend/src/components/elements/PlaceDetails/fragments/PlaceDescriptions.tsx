'use client';
import { PlaceDescContainer } from './PlaceDescriptions.styles';

interface PlaceDescriptionsProps {
  viewAllImages: boolean;
  placeData: any;
}
function PlaceDescriptions({ viewAllImages, placeData }: PlaceDescriptionsProps) {
  return (
    <PlaceDescContainer style={{ display: viewAllImages ? 'none' : 'block' }}>
      <ul>
        <li>{placeData.name}</li>
        <li>{placeData.address}</li>
        <li>{placeData.description}</li>
      </ul>
    </PlaceDescContainer>
  );
}
export default PlaceDescriptions;
