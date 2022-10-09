import { useQuery } from '@apollo/client'
import React, { FC } from 'react'
import styled from 'styled-components'
import { Q_GET_ALL_POSTS, TGetAllPostsResponse, TGetAllPostsVars, TPostInList } from '../../common/api/queries/post/get_all_posts'
import { TFetchProps, withFetchHandler } from '../../common/hocs/withFetchHandler'
import { PostPreview } from '../../widgets/posts/PostPreview'

type TPostListProps = { posts: (TPostInList[] | undefined)}

export const PostList: FC<TPostListProps & TFetchProps> = withFetchHandler<TPostListProps>((props: TPostListProps) => {
  console.log(props)
  
  const postItems = props.posts?.map(p => <PostPreview key={p.databaseId} item={p} />)
  return <S.PostList>{postItems}</S.PostList>
})

export const HomePage = () => {
  
  const fetchVars: TGetAllPostsVars = { last: 10, after: '' }
  const { loading, error, data, fetchMore } = useQuery<TGetAllPostsResponse, TGetAllPostsVars>(Q_GET_ALL_POSTS, { variables:  fetchVars});
  const posts = data?.posts.nodes
  // const pageInfo = data?.posts.pageInfo

  console.log(data)
  
  return (
    <S.PostList>
      <PostList posts={posts} loading={loading} error={error}/>
    </S.PostList>
  )
}


const S = {
  Container: styled.div``,
    PostList: styled.div``
}