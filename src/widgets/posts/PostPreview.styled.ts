import styled from "styled-components";
import { theme } from "../../styles/theme";

export const S = {
    Container: styled.div`
      padding: 16px;
      border-radius: 8px;
      border: 1px solid ${theme.colors.border};
      background-color: ${theme.colors.bgLayout};
      margin-bottom: 16px;
    `,
      FlexList: styled.div`
        display: flex;
        gap: 20px;
        @media ${theme.media.small} {
          flex-wrap: wrap;
        }
      `,
      ImgWrap: styled.div`
        flex: 0 0 30%;
        @media ${theme.media.small} {
          flex: 0 0 100%;
        }
      `,
        Img: styled.img`
          display: block;
          width: 100%;
        `,
      TextWrap: styled.div`
        flex: auto;
      `,
        Meta: styled.div`
          margin-bottom: 13px;
        `,
        Title: styled.div`
          font-size: 24px;
          font-family: 'Roboto Medium', sans-serif;
          margin-bottom: 13px;
        `,    
        Description: styled.div`
          margin-bottom: 13px;
          overflow: hidden;
          text-overflow: clip;
          line-clamp: 3;
          -webkit-line-clamp: 3;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          & > * {
            margin-top: 0px;
          }
        `,
        MetaInfo: styled.div`
          display: flex;
          justify-content: space-between;
        `,
          MetaRow1: styled.div``,
            AuthorName: styled.div`
              font-weight: bold;
              font-size: 14px;
            `,
            PublishedOn: styled.div`
              font-size: 14px;
              margin-top: 3px;
            `,
          MetaRow2: styled.div``
  }