import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme";

export const SGLink = {
  Color: styled(Link)`
    color: ${theme.colors.linkActive};
    text-decoration: none;
  `,
  Bold: styled(Link)`
    color: ${theme.colors.link};
    text-decoration: none;
    font-weight: bold;
  `
}