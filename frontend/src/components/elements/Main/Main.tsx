'use client';

import arrFunction from '@/components/elements/Main/fragments/imageByIndex';

import BestCamping from '@/components/elements/Main/fragments/BestCamping';
import NewCamping from '@/components/elements/Main/fragments/NewCamping';
import GuideCamping from '@/components/elements/Main/fragments/GuideCamping';
import HotCamping from '@/components/elements/Main/fragments/HotCamping';

export default function Main() {
  const { bestArr, newArr, guideArr, hotArr } = arrFunction();

  return (
    <>
      <BestCamping props={bestArr} />
      <NewCamping props={newArr} />
      <GuideCamping props={guideArr} />
      <HotCamping props={hotArr} />
    </>
  );
}
