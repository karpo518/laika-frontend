import { gql } from "@apollo/client";

export const Q_GET_LAST_COMMENTS = gql`
query Last_Comments($last: Int!, $after: String!) {
  comments(
    last: $last
    after: $after
    where: {contentType: POST, order: DESC, orderby: COMMENT_ID}
  ) {
    nodes {
      databaseId
      content
      author {
        node {
          databaseId
          name
        }
      }
      commentedOn {
        node {
          ... on Post {
            databaseId
            title
            slug
          }
        }
      }
    }
  }
}
`;

export type TGetLastCommentsResponse = {
  comments: {
    nodes: TLastComment[]
  }
}

export type TLastComment = {
  databaseId: number
  author: {
    node: {
      databaseId: number
      name: string
    }
  }
  content: string
  commentedOn: {
    node: {
      databaseId: number
      title: string
      slug: string
    }
  }
}

export type TGetLastCommentsVars = {
  last: number
  after: string
}