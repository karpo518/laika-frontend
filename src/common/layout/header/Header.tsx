import React, { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import { Branding } from './Branding'
import { MenuCategories } from './MenuCategories'
import { Widgets } from './Widgets'

export type TMenuItem = {
  id: number,
  name: string
}

const catMenuItems: TMenuItem[] = [
  { id: 1, name: 'Путешествия' },
  { id: 2, name: 'Технологии' },
  { id: 3, name: 'Финансы' },
  { id: 4, name: 'Разное' },
]

export const Header: FC = () => {
  return (
    <Container>
      <BrandingWrap>
        <Branding />
      </BrandingWrap>
      <MenuWrap>
        <MenuCategories items={catMenuItems} />
      </MenuWrap>
      <WidgetsWrap>
        <Widgets catMenuItems={catMenuItems} />
      </WidgetsWrap>
    </Container>
  )
}

const Container = styled.header`
  background: ${theme.colors.bgLayout};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 8px 15px;
  box-shadow: 0 1px 0 0 hsl(0deg 0% 100% / 5%), 0 5px 10px 0 hsl(0deg 0% 74% / 15%);
`
const BrandingWrap = styled.div``

const MenuWrap = styled.div`
  @media ${theme.media.large} {
    display: none;
  }
`

const WidgetsWrap = styled.div``