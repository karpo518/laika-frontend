import { TAuthor, TPageInfo, TCategory } from './../types';
import { gql } from "@apollo/client";

export const Q_GET_ALL_POSTS = gql`
query Posts($last: Int!, $after: String!) {
    posts(last: $last, after: $after) {
      nodes {
        databaseId
        slug
        title
        content
        author {
          node {
            databaseId
            name
            uri
            url
          }
        }
        categories {
          nodes {
            databaseId
            name
          }
        }
        date
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

export type TGetAllPostsResponse = {
  posts: {
    pageInfo: TPageInfo
    nodes: TPostInList[]
  }
}

export type TPostInList = {
  
    databaseId: number
    slug: string
    title: string
    content: string
    author: {
      node: TAuthor
    }
    categories: {
      nodes: TCategory[]
    }
    date: string
    featuredImage: {
      node: {
        mediaItemUrl: string
      }
    }
}

export type TGetAllPostsVars = {
  last: number
  after: string | null
}