'use client';

import BookerInformation from './BookerInformation';
import { Container } from './OrderInformation.styles';
import ScheduleDetails from './ScheduleDetails';

function OrderInformation() {
  return (
    <Container>
      <BookerInformation />
      <ScheduleDetails />
    </Container>
  );
}
export default OrderInformation;
