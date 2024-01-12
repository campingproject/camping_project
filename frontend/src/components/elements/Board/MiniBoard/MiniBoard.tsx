import Image from "next/image";
import {
  Title,
  Container,
  Content,
  ContentBox,
  Star,
  BoxText,
} from "./MiniBoard.style";
import { boardImage1, boardImage2 } from "@/public/svgs";

export default function MiniBoard() {
  return (
    <Container>
      <Title>
        <span>캠핑 한컷 찰칵</span>
        <hr />
      </Title>
      <Content>
        <ContentBox>
          <Image height={130} src={boardImage1} alt={"메인이미지"} />
          <p>000 캠핑장</p>
          <Star>
            {Array.from({ length: 5 }, () => (
              <span style={{ color: "gold", fontSize: "18px" }}>★</span>
            ))}
          </Star>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            #가을 #뷰맛집 #바다
          </p>
          <BoxText>가격이 합리적이에요, 바다 뷰가 최고</BoxText>
        </ContentBox>
        <ContentBox>
          <Image height={130} src={boardImage2} alt={"메인이미지"} />
          <p>000 캠핑장</p>
          <Star>
            {Array.from({ length: 4 }, () => (
              <span style={{ color: "gold", fontSize: "18px" }}>★</span>
            ))}
          </Star>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            #청결해요 #매너타임 #부부
          </p>
          <BoxText>매너타임을 철저하게 지키는 곳이어서 좋았습니다.</BoxText>
        </ContentBox>
        <ContentBox>
          <Image height={130} src={boardImage2} alt={"메인이미지"} />
          <p>000 캠핑장</p>
          <Star>
            {Array.from({ length: 4 }, () => (
              <span style={{ color: "gold", fontSize: "18px" }}>★</span>
            ))}
          </Star>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            #청결해요 #매너타임 #부부
          </p>
          <BoxText>매너타임을 철저하게 지키는 곳이어서 좋았습니다.</BoxText>
        </ContentBox>
        <ContentBox>
          <Image height={130} src={boardImage1} alt={"메인이미지"} />
          <p>000 캠핑장</p>
          <Star>
            {Array.from({ length: 3 }, () => (
              <span style={{ color: "gold", fontSize: "18px" }}>★</span>
            ))}
          </Star>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            #겨울 #편의시설 #청결해요
          </p>
          <BoxText>가격이 합리적이에요, 바다 뷰가 최고</BoxText>
        </ContentBox>
        <ContentBox>
          <Image height={130} src={boardImage1} alt={"메인이미지"} />
          <p>000 캠핑장</p>
          <Star>
            {Array.from({ length: 5 }, () => (
              <span style={{ color: "gold", fontSize: "18px" }}>★</span>
            ))}
          </Star>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            #가을 #뷰맛집 #바다
          </p>
          <BoxText>가격이 합리적이에요, 바다 뷰가 최고</BoxText>
        </ContentBox>
      </Content>
    </Container>
  );
}
