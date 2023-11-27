'use client';

import arrFunction from '@/components/Main/fragments/imageByIndex';

import BestCamping from '@/components/Main/fragments/BestCamping';
import NewCamping from '@/components/Main/fragments/NewCamping';
import GuideCamping from '@/components/Main/fragments/GuideCamping';
import HotCamping from '@/components/Main/fragments/HotCamping';

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
