import {
  Title,
  Container,
  Content,
  ContentBox,
  Star,
  BoxText,
  StyledImage,
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
          <StyledImage src={boardImage1} alt={"캠핑한컷_이미지"} />
          <p>000 캠핑장</p>
          <Star>
            {Array.from({ length: 5 }, () => (
              <span>★</span>
            ))}
          </Star>
          <p>#가을 #뷰맛집 #바다</p>
          <BoxText>가격이 합리적이에요, 바다 뷰가 최고</BoxText>
        </ContentBox>
        <ContentBox>
          <StyledImage src={boardImage1} alt={"메인이미지"} />
          <p>000 캠핑장</p>
          <Star>
            {Array.from({ length: 5 }, () => (
              <span>★</span>
            ))}
          </Star>
          <p>#가을 #뷰맛집 #바다</p>
          <BoxText>가격이 합리적이에요, 바다 뷰가 최고</BoxText>
        </ContentBox>
        <ContentBox>
          <StyledImage src={boardImage2} alt={"메인이미지"} />
          <p>000 캠핑장</p>
          <Star>
            {Array.from({ length: 4 }, () => (
              <span>★</span>
            ))}
          </Star>
          <p>#청결해요 #매너타임 #부부</p>
          <BoxText>매너타임을 철저하게 지키는 곳이어서 좋았습니다.</BoxText>
        </ContentBox>
        <ContentBox>
          <StyledImage src={boardImage2} alt={"메인이미지"} />
          <p>000 캠핑장</p>
          <Star>
            {Array.from({ length: 4 }, () => (
              <span>★</span>
            ))}
          </Star>
          <p>#청결해요 #매너타임 #부부</p>
          <BoxText>매너타임을 철저하게 지키는 곳이어서 좋았습니다.</BoxText>
        </ContentBox>
        <ContentBox>
          <StyledImage src={boardImage1} alt={"메인이미지"} />
          <p>000 캠핑장</p>
          <Star>
            {Array.from({ length: 3 }, () => (
              <span>★</span>
            ))}
          </Star>
          <p>#겨울 #편의시설 #청결해요</p>
          <BoxText>가격이 합리적이에요, 바다 뷰가 최고</BoxText>
        </ContentBox>
        <ContentBox>
          <StyledImage src={boardImage1} alt={"메인이미지"} />
          <p>000 캠핑장</p>
          <Star>
            {Array.from({ length: 5 }, () => (
              <span>★</span>
            ))}
          </Star>
          <p>#가을 #뷰맛집 #바다</p>
          <BoxText>가격이 합리적이에요, 바다 뷰가 최고</BoxText>
        </ContentBox>
      </Content>
    </Container>
  );
}
