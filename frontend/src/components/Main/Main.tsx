"use client";

import styled from "styled-components";
import arrFunction from "./fragments/imageByIndex";
import Carousel from "../Carousel";
import { useEffect, useState } from "react";
import { svgType } from "@/types";

const Container = styled.div`
  position: relative;
  max-width: 90%;
  width: 100%;
  margin: auto;
  margin-top: 100px;
  padding-bottom: 5px;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    text-align: center;
    font-family: Inter;
    color: #ff5252;
    font-size: 16px;
    font-weight: bold;
    width: 15%;
  }

  hr {
    width: 85%;
  }
`;
const Content = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export default function Main() {
  const { bestArr, newArr, guideArr, hotArr } = arrFunction();
  const [bestItem, setBestItem] = useState<svgType[]>([]);
  const [newItem, setNewItem] = useState<svgType[]>([]);
  const [guideItem, setGuideItem] = useState<svgType[]>([]);
  const [hotItem, setHotItem] = useState<svgType[]>([]);
  console.log(bestArr);
  useEffect(() => {
    setBestItem(bestArr);
    setNewItem(newArr);
    setGuideItem(guideArr);
    setHotItem(hotArr);
  }, []);
  return (
    <>
      <Container>
        <Title>
          <span>실시간 인기 Best 3</span>
          <hr />
        </Title>
        <Content>
          <Carousel props={bestItem} />
        </Content>
      </Container>
      <Container>
        <Title>
          <span>새로 추가 되었어요!</span>
          <hr />
        </Title>
        <Content>
          <Carousel props={newItem} />
        </Content>
      </Container>
      <Container>
        <Title>
          <span>캠핑 가이드</span>
          <hr />
        </Title>
        <Content>
          <Carousel props={guideItem} />
        </Content>
      </Container>
      <Container>
        <Title>
          <span>HOT 캠핑 이야기</span>
          <hr />
        </Title>
        <Content>
          <Carousel props={hotItem} />
        </Content>
      </Container>
    </>
  );
}
