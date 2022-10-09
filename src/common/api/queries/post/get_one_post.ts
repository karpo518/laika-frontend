import { TPageInfo, TCategory, TAuthor, TSeo } from './../types';
import { gql } from "@apollo/client";
import { TTag } from '../../../types/types';

export const Q_GET_ONE_POST = gql`
  query Post($id: ID!, $maxCommentCount: Int!) {
    post(idType: DATABASE_ID, id: $id, ) {
      databaseId
      slug
      title
      date
      content
      commentCount
      categories {
        nodes {
          databaseId
          name
        }
      }
      tags {
        nodes {
          slug
          name
        }
      }
      author {
        node {
          databaseId
          name
        }
      }
      seo {
        title
        metaDesc
        metaKeywords
      }
      comments(last: $maxCommentCount, where: {parent: 0, orderby: COMMENT_ID, order: DESC}) {
        nodes {
          databaseId
          parentDatabaseId
          date
          content
          replies(last: $maxCommentCount) {
            nodes {
              databaseId
              parentDatabaseId
              content
              date
              dateGmt
              author {
                node {
                  name
                  databaseId
                }
              }
            }
            pageInfo {
              endCursor
              hasNextPage
              hasPreviousPage
              startCursor
            }
          }
          author {
            node {
              databaseId
              name
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
`;


export type TGetOnePostResponse = {
  post: TPost
}

export type TPost = {
  databaseId: number
  slug: string
  title: string
  date: string
  content: string
  commentCount: number
  categories: {
    nodes: TCategory[]
  }
  tags: {
    nodes: TTag[]
  }
  author: {
    node: TAuthor
  }
  seo: TSeo
  comments: {
    nodes: TComment
    pageInfo: TPageInfo
  }
}


export type TComment = {
  databaseId: number
  parentDatabaseId: number
  date: string
  content: string
  author: {
    node: TAuthor
  }
  replies: {
    nodes?: [] | TComment[]
    pageInfo: TPageInfo
  }
}


export type TGetOnePostVars = {
  id: string
  maxCommentCount: number
}