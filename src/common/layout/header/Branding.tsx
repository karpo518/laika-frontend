import React, { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import srcLogo from './../../../../public/logo.png'

export let Branding: FC = () => {
    return (
        <Container>
            <Logo src={srcLogo} />
            <Brand>
                <BrandLink href="/" >laika.one</BrandLink>
            </Brand>
            <Slogan>Первая космическая лайка</Slogan>
        </Container>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-areas: 
    "logo brand"
    "logo slogan";
  grid-template-columns: 60px max-content;
  grid-template-rows: 1fr max-content;
  grid-column-gap: 5px;
  align-items: end;
  & * {
    line-height: 0.9;
  }
  @media ${theme.media.small} {
    grid-template-areas: 
    "logo brand"
    "slogan slogan";
    grid-template-columns: 40px max-content;
  }

`

const Logo = styled.img`
  grid-area: logo;
  @media ${theme.media.small} {
    width: 40px;
    height: 40px;
  }
`

const Brand = styled.div`
  grid-area: brand;
`
const BrandLink = styled.a`
  text-decoration: none;
  font-size: 38px;
  font-weight: 700;
  color: ${theme.colors.text};

  @media ${theme.media.small} {
    font-size: 30px;
  }
`

const Slogan = styled.div`
  grid-area: slogan;
  color: ${theme.colors.text};
  font-size: 14px;
  padding-top: 3px;
  @media ${theme.media.small} {

  }
`