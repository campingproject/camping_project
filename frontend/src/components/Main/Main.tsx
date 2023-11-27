"use client";

import styled from "styled-components";
import arrFunction from "@/components/Main/fragments/imageByIndex";

import { useEffect, useState } from "react";
import { svgType } from "@/types";
import Best from "@/components/Best";
import New from "@/components/New";
import Guide from "@/components/Guide";
import Hot from "../Hot";

export default function Main() {
  const { bestArr, newArr, guideArr, hotArr } = arrFunction();
  const [bestItem, setBestItem] = useState<svgType[]>([]);
  const [newItem, setNewItem] = useState<svgType[]>([]);
  const [guideItem, setGuideItem] = useState<svgType[]>([]);
  const [hotItem, setHotItem] = useState<svgType[]>([]);
  useEffect(() => {
    setBestItem(bestArr);
    setNewItem(newArr);
    setGuideItem(guideArr);
    setHotItem(hotArr);
  }, []);
  return (
    <>
      <Best props={bestItem} />
      <New props={newItem} />
      <Guide props={guideItem} />
      <Hot props={hotItem} />
    </>
  );
}
