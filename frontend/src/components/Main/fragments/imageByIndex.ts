import {
  Best1,
  Best2,
  Best3,
  New1,
  New2,
  New3,
  Guide1,
  Guide2,
  Guide3,
  Hot1,
  Hot2,
  Hot3,
} from "@/public/svgs";
import { svgType } from "@/types";

const arrFunction = () => {
  let bestArr: svgType[] = [],
    newArr: svgType[] = [],
    guideArr: svgType[] = [],
    hotArr: svgType[] = [];
  for (let i = 0; i < 2; i++) {
    bestArr.push(Best1, Best2, Best3);
    newArr.push(New1, New2, New3);
    guideArr.push(Guide1, Guide2, Guide3);
    hotArr.push(Hot1, Hot2, Hot3);
  }
  return { bestArr, newArr, guideArr, hotArr };
};

export default arrFunction;
