import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import { TLastComment } from '../../api/queries/comments'

type TProps = {item: TLastComment}

export type TCommentItem = {
  id: number,
  text: string,
  authorId: number,
  authorName: string,
  postId: number, 
  postTitle: string,
}


export const CommentItem: FC<TProps> = ({item}) => {
  
  return (
    <S.Container>
      <S.Heading>
        <S.CAuthorLink to={`/users/${item.author.node.databaseId}`}>{item.author.node.name}</S.CAuthorLink> 
        <span> на </span> <S.CPostLink to={`/posts/${item.commentedOn.node.databaseId}`}>{item.commentedOn.node.title}</S.CPostLink>
      </S.Heading>
      <S.Content>
        <S.CommentLink to={`/posts/${item.commentedOn.node.databaseId}#comment-${item.databaseId}`} 
                       dangerouslySetInnerHTML={{ __html: item.content }} ></S.CommentLink>
      </S.Content>
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    margin: 14px 0px;
    line-height: 1.5;
  `,
    Heading: styled.div``,
      CAuthorLink: styled(Link)`
        color: ${theme.colors.linkActive};
        text-decoration: none;
        font-weight: bold;
      `,
      CPostLink: styled(Link)`
        color: ${theme.colors.link};
        text-decoration: none;
        font-weight: bold;
        &:hover {
          color: ${theme.colors.linkActive};
        }
      `,
      Content: styled.div`
        overflow: hidden;
        text-overflow: clip;
        line-clamp: 5;
        -webkit-line-clamp: 5;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      `,
        CommentLink: styled(Link)`
          display: block;
          &:hover {
            text-decoration: underline;
          }
          &> * {
            margin-top: 0px;
            margin-bottom: 0px;
          }
        `
}