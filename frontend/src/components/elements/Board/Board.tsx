"use client";
import { BoardContainer, Title } from "./Board.style";
import FreeBoard from "./FreeBoard";
import MiniBoard from "./MiniBoard";

export default function Board() {
  return (
    <BoardContainer>
      <Title>캠핑이야기</Title>
      <MiniBoard />
      <FreeBoard />
    </BoardContainer>
  );
}
