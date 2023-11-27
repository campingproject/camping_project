import { svgType } from "@/types";
import * as Main from "@/styles";
import Carousel from "@/components/Carousel";

export default function Guide({ props }: { props: svgType[] }) {
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
