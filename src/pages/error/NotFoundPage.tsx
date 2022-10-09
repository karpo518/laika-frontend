import React from "react";
import { FC } from "react";
import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";
import { SGLink } from "../../styles/components/SGLink.styles";

export const NotFoundPage: FC<{}> = () => {
  return (
    <S.Container>
      <h1>Страница не найдена!</h1>
      <p>Проверьте адрес страницы или перейдите на <SGLink.Color to={'/'} >главную страницу</SGLink.Color></p>
    </S.Container>
  );
}

const S = {
  Container: styled.div``,
}