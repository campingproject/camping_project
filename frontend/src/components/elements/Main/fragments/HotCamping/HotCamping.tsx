import { svgType } from '@/types';
import * as Main from '@/styles';
import Carousel from '@/components/common/Carousel';

export default function HotCamping({ props }: { props: svgType[] }) {
  return (
    <Main.Container>
      <Main.Title>
        <span>HOT 캠핑 이야기</span>
        <hr />
      </Main.Title>
      <Main.Content>
        <Carousel props={props} />
      </Main.Content>
    </Main.Container>
  );
}
