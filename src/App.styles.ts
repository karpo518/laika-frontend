import styled from "styled-components";
import { theme } from "./styles/theme";

export const S = {
  App: styled.div`
    display: grid;
    grid-template-columns: 1fr 260px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "header header"
      "content sidebar"
      "footer footer";
    grid-gap: 16px;
    max-width: 1170px;
    margin: 0px auto;
    min-height: 100vh;

    @media ${theme.media.medium} {
        grid-template-areas:
        "header header"
        "content content"
        "sidebar sidebar"
        "footer footer";
    }
  `,

    HeaderWrap: styled.div`
      grid-area: header;
      background-color: blue;
      position: sticky;
      top: 0;
      z-index: 10;
    `,

    ContentWrap: styled.div`
      grid-area: content;
      min-height: 2000px;
    `,

    SidebarWrap: styled.div`
      grid-area: sidebar;
    `,
    FooterWrap: styled.div`
      grid-area: footer;
    `
}