import { useState } from "react";
import { Container, Arrow, PageNum } from "./Pagination.style";

export default function Pagination() {
  const [num, setNum] = useState([1, 2, 3]);
  return (
    <Container>
      <Arrow>{"<"}</Arrow>
      <div>
        {num.map((v) => (
          <PageNum key={v}>{v}</PageNum>
        ))}
      </div>
      <Arrow>{">"}</Arrow>
    </Container>
  );
}
