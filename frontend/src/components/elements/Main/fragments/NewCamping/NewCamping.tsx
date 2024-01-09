import * as Main from '@/styles';
import Carousel from '@/components/common/Carousel';
import { svgType } from '@/types';

export default function NewCamping({ props }: { props: svgType[] }) {
  return (
    <Main.Container>
      <Main.Title>
        <span>새로 추가 되었어요!</span>
        <hr />
      </Main.Title>
      <Main.Content>
        <Carousel props={props} />
      </Main.Content>
    </Main.Container>
  );
}
