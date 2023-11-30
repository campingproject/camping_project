import { svgType } from '@/types';
import * as Main from '@/styles';
import Carousel from '@/components/common/Carousel';

export default function GuideCamping({ props }: { props: svgType[] }) {
  return (
    <Main.Container>
      <Main.Title>
        <span>캠핑 가이드</span>
        <hr />
      </Main.Title>
      <Main.Content>
        <Carousel props={props} />
      </Main.Content>
    </Main.Container>
  );
}
