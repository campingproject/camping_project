'use client';
import { PlaceDescContainer } from './PlaceDescriptions.styles';

interface PlaceDescriptionsProps {
  modalOpen: boolean;
}
function PlaceDescriptions({ modalOpen }: PlaceDescriptionsProps) {
  return (
    <PlaceDescContainer style={{ display: modalOpen ? 'none' : 'block' }}>
      <ul>
        <li>캠핑장명</li>
        <li>캠핑장 주소지</li>
        <li>캠핑장 설명</li>
      </ul>
    </PlaceDescContainer>
  );
}
export default PlaceDescriptions;
