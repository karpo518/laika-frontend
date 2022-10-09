import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TCategory, TTag } from '../../common/types/types'
import { theme } from '../../styles/theme'

type TProps = {tags: TTag[] }

export const TagList: FC<TProps> = (props) => {
  
    const tagItems = props.tags.map((t, i) => {
      return [i > 0 && ', ',<S.TagItem key={t.slug} ><Link to={`/tag/${t.slug}`}>{t.name}</Link></S.TagItem>]
    })
  
    return <S.TagList>{tagItems}</S.TagList>
}


const S = {
  TagList: styled.ul`
    list-style-type: none;
    display: inline;
    line-height: normal;
    padding-left: 0px;
    &:before {
      content:'#';
    }
  `,
    TagItem: styled.li`
      display: inline;

      line-height: normal;
      &:last-child {
        margin-right: 0px;
      }
      & a {
        color: ${theme.colors.link};
        font-weight: bold;
        font-size: 16px;
        line-height: normal;
      }
    `,
}