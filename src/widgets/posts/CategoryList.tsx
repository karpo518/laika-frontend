import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TCategory } from '../../common/types/types'
import { theme } from '../../styles/theme'

type TProps = {categories: TCategory[] }

export const CategoryList: FC<TProps> = (props) => {
  
    const categoryItems = props.categories.map(c => <S.RubricItem key={c.databaseId} ><Link to={`/category/${c.databaseId}`}>{c.name}</Link></S.RubricItem>)
  
    return <S.RubricList>{categoryItems}</S.RubricList>
}


const S = {
  RubricList: styled.ul`
    list-style-type: none;
    display: inline;
    line-height: normal;
    padding-left: 0px;
  `,
    RubricItem: styled.li`
      display: inline;
      margin-right: 25px;
      line-height: normal;
      &:last-child {
        margin-right: 0px;
      }
      & a {
        color: ${theme.colors.linkActive};
        font-weight: bold;
        font-size: 13px;
        text-transform: uppercase;
        line-height: normal;
      }
    `,
}