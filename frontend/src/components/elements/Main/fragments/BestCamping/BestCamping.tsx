import * as Main from '@/styles/';
import Carousel from '@/components/common/Carousel';
import { svgType } from '@/types';

export default function BestCamping({ props }: { props: svgType[] }) {
  return (
    <Main.Container>
      <Main.Title>
        <span style={{ color: '#ff5252' }}>실시간 인기 Best 3</span>
        <hr />
      </Main.Title>
      <Main.Content>
        <Carousel props={props} />
      </Main.Content>
    </Main.Container>
  );
}
