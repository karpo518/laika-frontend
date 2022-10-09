import { useQuery } from '@apollo/client'
import React, { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import { Q_GET_LAST_COMMENTS, TGetLastCommentsResponse, TGetLastCommentsVars, TLastComment } from '../../api/queries/comments'
import { TFetchProps, withFetchHandler } from '../../hocs/withFetchHandler'
import { CommentItem, TCommentItem } from './CommentItem'

type TProps = {}


export const Sidebar: FC = () => {

  const fetchVars: TGetLastCommentsVars = { last: 10, after: '' }
  const { loading, error, data, fetchMore } = useQuery<TGetLastCommentsResponse, TGetLastCommentsVars>(Q_GET_LAST_COMMENTS, { variables:  fetchVars});
  const comments = data?.comments.nodes

  console.log(data)
  
  return (
    <S.Container>
      <S.Section>
        <S.Heading>Свежие комментарии</S.Heading>
        <LastCommentList comments={comments} loading={loading} error={error} />
      </S.Section>
    </S.Container>
  )
}

type TCommentListProps = { comments: TLastComment[] | undefined }

const LastCommentList: FC<TCommentListProps & TFetchProps> = withFetchHandler<TCommentListProps>((props: TCommentListProps) => {

  let commentList = props.comments?.map(i => <CommentItem item={i} key={i.databaseId} /> )  
  return <S.Content>{commentList}</S.Content>
})

const S = {
  Container: styled.aside`
    background: ${theme.colors.bgLayout};
    border-radius: 8px;
    border: 1px solid ${theme.colors.border};
  `,
    Section: styled.section`
      padding-bottom: 16px;
    `,
      Heading: styled.div`
        border-bottom: 1px solid ${theme.colors.border};
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 16px;
        margin-bottom: 20px;
        padding: 16px 16px 12px 16px;
        line-height: normal;
      `,
      Content: styled.div`
        padding: 0px 16px;
      `
}