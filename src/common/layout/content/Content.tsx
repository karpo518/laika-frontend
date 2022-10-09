import React, { FC } from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import styled from 'styled-components'
import { HomePage } from '../../../pages/home/HomePage'
import { routes } from '../../../routes'

type TProps = {}

export const Content: FC<TProps> = () => {
  
  let page = useRoutes(routes);
  
  return (
    <S.Container>
        {page}
    </S.Container>
  )
}

const S = {
    Container: styled.main``
}