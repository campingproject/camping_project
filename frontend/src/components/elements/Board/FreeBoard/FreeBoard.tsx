import Pagination from "@/components/common/Pagination";
import {
  Container,
  Title,
  Content,
  Box,
  Picture,
  BoardContent,
  StyledImage,
  RegisterImage,
  Footer,
} from "./FreeBoard.style";
import { boardImage1, boardImage2, registerBtn } from "@/public/svgs";
import { useState } from "react";

export default function FreeBoard() {
  const [list, setList] = useState([
    {
      image: boardImage1,
      title: "(노하우)동계 캠핑 센스 가득 아이템 모음",
      content: `contentcontentcontentcontentcontentcontentfsfsfdsfsdfsdfsfsdfsfsdfsdfsdfdsfsdfdsfscontentcontentcontentcontentcontentcontentfsfsfdsfsdfsdfsfsdfsfsdfsdfsdfdsfsdfdsfscontentcontentcontentcontentcontentcontentfsfsfdsfsdfsdfsfsdfscontentcontentcontentcontentcontentcontentfsfsfdsfsdfsdfsfsdfsfsdfsdfsdfdsfsdfdsfscontentcontentcontentcontentcontentcontentfsfsfdsfsdfsdfsfsdfscontentcontentcontentcontentcontentcontentfsfsfdsfsdfsdfsfsdfsfsdfsdfsdfdsfsdfdsf`,
      tag: "#캠핑 #오토캠핑 #동계 #겨울 #겨울캠핑 #캠핑템",
    },
    {
      image: boardImage1,
      title: "(노하우)전기차 차박 노하우 공유합니다!",
      content: `안녕하세요 전기차 차박 3년차 캠퍼입니다. 지난 2년간 다녀본 전기차 캠
        핑 노하우를 공유드리고자 합니다! 제조사마다 다르지만, 최신 차종의 경
        우 캠핑모드가 있는데요~ 미리 설정해두면 자동으로 공조를 작동하면서 
        숙면 중 위험한 상황을 예방할 수 있습니다. 만약 캠핑모드가 없다면...`,
      tag: "#전기차 #차박 #테슬라 #아이오닉 #캠핑모드",
    },
    {
      image: boardImage2,
      title: "(가이드) 가족끼리 간다면? 캠핑 의자 종류",
      content: "너무 많은 캠핑의자, 어떤걸 고르면 좋을까요?",
      tag: "#오토캠핑 #캠핑장비 #캠핑의자 #가족캠핑",
    },
    {
      image: boardImage2,
      title: "캠핑이 처음이시라면? 반만 따라해보세요",
      content: "주변에서 한다는 캠핑, 어떻게 시작해야할 지 고민이시죠?",
      tag: "#오토캠핑 #노하우 #첫캠핑",
    },
    {
      image: boardImage2,
      title: "(노하우) 불멍 후 화로 정리 법",
      content: "불멍 후 화로 정리하는 방법 알려드립니다",
      tag: "#캠핑 #화로 #불멍 #캠핑불멍 #캠핑정리",
    },
    {
      image: boardImage1,
      title: "캠린이, 100만원 미만으로 캠핑셋 갖추기",
      content: "한도 없는 캠핑장비, 단 100만원으로 맞춰봅시다",
      tag: "#캠핑 #캠린이 #캠핑장비 #꿀팁",
    },
  ]);
  return (
    <Container>
      <Title>
        <span>자유게시판</span>
        <hr />
      </Title>
      <Content>
        {list.map((v, i) => (
          <Box key={i}>
            <Picture>
              <StyledImage src={v.image} alt="자유게시판_이미지" />
            </Picture>
            <BoardContent>
              <div>{v.title}</div>
              <div>
                {v.content.length > 120
                  ? v.content.slice(0, 120) + "..."
                  : v.content}
              </div>
              <div>{v.tag}</div>
            </BoardContent>
          </Box>
        ))}
      </Content>
      <Footer>
        <Pagination />
        <RegisterImage width={50} src={registerBtn} alt="등록버튼" />
      </Footer>
    </Container>
  );
}
