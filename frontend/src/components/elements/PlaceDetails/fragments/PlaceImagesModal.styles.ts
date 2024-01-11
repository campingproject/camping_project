import styled from "styled-components";
import Theme from "@/styles/theme";

export const SectionStyled = styled.section`
  width: 65vw;
  margin: auto;
  button {
    .prev_icon {
      margin-right: 5px;
    }
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: ${Theme.fontSize.large};
    color: ${Theme.colors.gray400};
    margin-bottom: 15px;
    margin-top: 50px;
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .image_wrap {
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
    img:hover {
      filter: brightness(80%);
    }
  }

  @media screen and (max-width: ${Theme.screen.pc}) {
    width: 80vw;
    .image-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: ${Theme.screen.mobile}) {
    width: 75vw;
    .image-grid {
      grid-template-columns: 1fr;
    }
    button {
      margin-top: 25px;
    }
  }
`;
