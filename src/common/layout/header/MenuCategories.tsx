import React, { FC } from 'react'
import styled from 'styled-components'
import srcLogo from './../../../../public/logo.png'
import {NavLink} from 'react-router-dom'
import { theme } from '../../../styles/theme'
import { TMenuItem } from './Header'

type TProps = {items: TMenuItem[]}

export const MenuCategories:FC<TProps> = ({items}) => {
    

    const menuList = items.map( (i: TMenuItem) => <Item key={i.id} ><SNavLink to={`/category/${i.id}`} >{i.name}</SNavLink></Item>)

    return (
        <Container>
            {menuList}
        </Container>
    )
}

const Container = styled.ul`
  line-height: 1.5;
  padding-left: 0;
  margin: 0px 10px;  
`

const Item = styled.li`
  display: inline-flex;
  margin-right: 25px;
  &:last-child {
    margin-right: 0px;
  }
`
const SNavLink = styled(NavLink)`
  color: ${theme.colors.link};
  text-decoration: none;
`