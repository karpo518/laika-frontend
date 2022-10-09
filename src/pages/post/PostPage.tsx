import { useQuery } from '@apollo/client'
import { faPrescriptionBottleMedical } from '@fortawesome/free-solid-svg-icons'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Q_GET_ONE_POST, TGetOnePostResponse, TGetOnePostVars, TPost } from '../../common/api/queries/post/get_one_post'
import { DateHelper } from '../../common/helpers/DateHelper'
import { TFetchProps, withFetchHandler } from '../../common/hocs/withFetchHandler'
import { SGLink } from '../../styles/components/SGLink.styles'
import { theme } from '../../styles/theme'
import { CategoryList } from '../../widgets/posts/CategoryList'
import { TagList } from '../../widgets/posts/TagList'
import { ViewCounter } from '../../widgets/posts/ViewCounter'
import { NotFoundPage } from '../error/NotFoundPage'

export const PostPage = () => {
  let {postId, postSlug} = useParams()

  if(!postId || !postSlug) {
    return <NotFoundPage />
  }

  const fetchVars: TGetOnePostVars = {id: postId, maxCommentCount: 10 }
  const { loading, error, data, fetchMore } = useQuery<TGetOnePostResponse, TGetOnePostVars>(Q_GET_ONE_POST, { variables:  fetchVars});
  const post = data?.post

  return <S.Container>
              <PostSingle post={post} loading={loading} error={error} />
         </S.Container>
}

type TPostSingleProps = {post: TPost | undefined}

export const PostSingle: FC<TPostSingleProps & TFetchProps> = withFetchHandler<TPostSingleProps>((props: TPostSingleProps) => {
  
  const post = props.post
  let {postSlug} = useParams()
  
  if(!post) {
  
    return <></>
  }
    
  if(postSlug !== post.slug) {
    return <NotFoundPage />
  }

  const categories = post.categories.nodes
  const tags = post.tags.nodes
    
  return  (
    <S.PostSingle>
      <S.Header>
        <CategoryList categories={categories} />
        <S.Title>{post.title}</S.Title>
        <S.Author>
          <S.AuthorLink to={`/users/${post.author.node.databaseId}`}>{post.author.node.name}</S.AuthorLink>
        </S.Author>
        <S.PublishedOn dateTime={post.date} >{DateHelper.format(post.date)}</S.PublishedOn>
      </S.Header>
      <S.Content dangerouslySetInnerHTML={{ __html: post.content }} ></S.Content>
      <S.Footer>
        <S.TopFooter>
          <S.CategoriesArea><CategoryList categories={categories} / ></S.CategoriesArea>
          <S.TagsArea><TagList tags={tags} / ></S.TagsArea>
        </S.TopFooter>
        <S.BottomFooter>
          <ViewCounter count={0} />
          </S.BottomFooter>
      </S.Footer>
    </S.PostSingle>
  )

})

const S = {
  Container: styled.div`
      padding: 16px;
      border-radius: 8px;
      border: 1px solid ${theme.colors.border};
      background-color: ${theme.colors.bgLayout};
  `,
    PostSingle: styled.article``,
      Header: styled.div``,
        CategoryList: styled.div``,
        Title: styled.h1`
          font-weight: normal;
          line-height: 1.4;
          font-size: 32px;
          color: ${theme.colors.title};
          @media ${theme.media.smallMedium} {
            line-height: normal;
            margin-top: 10px;
            margin-bottom: 20px;
            font-size: 24px;
          }
        `,
        Author: styled.div``,
          AuthorLink: styled(Link)`
            color: ${theme.colors.link};
            font-weight: bold;
            font-size: 14px;
          `,
        PublishedOn: styled.time`
          font-size: 14px;
        `,
      Content: styled.div`
        & > * {
          margin: 16px 0px;
        }

        & iframe {
          max-width: 100%;
        }
        & figcaption {
          font-size: 14px;
        }
        & img {
          max-width: 100%;
          height: auto;
        }
        & .h2,h2 {
          font-weight: bold;
          font-size: 24px;
          padding-bottom: 0px;
          line-height: normal;
          color: ${theme.colors.title};
          @media ${theme.media.smallMedium} {
            font-size: 20px;
          }
        }

        & .strong {
          color: ${theme.colors.title};
          font-weight: bold;
        }

        & .h2 strong,h2 strong {
          line-height: normal;
        }
      `,
      Footer: styled.div`
        border-top: 1px solid ${theme.colors.border};
        padding-top: 20px;
      `,
        TopFooter: styled.div`
          gap: 16px;
          justify-content: left;
        `,
          CategoriesArea: styled.span`
            margin-right: 25px;
          `,
          TagsArea: styled.span``,
        BottomFooter: styled.div`
          margin-top: 10px;
        `
}