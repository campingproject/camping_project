import { Container } from './ReservePeriod.styles';

type Props = {
  checkInDate: string;
  checkOutDate: string;
};

function ReservePeriod({ checkInDate, checkOutDate }: Props) {
  return (
    <>
      <Container>
        <ul>
          <li>체크인</li>
          <li>{checkInDate}</li>
        </ul>
        <ul>
          <li>체크아웃</li>
          <li>{checkOutDate}</li>
        </ul>
      </Container>
    </>
  );
}
export default ReservePeriod;
