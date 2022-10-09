export type TPageInfo = {
    hasNextPage: boolean,
    hasPreviousPage: boolean,
    startCursor: string,
    endCursor: string
}

export type TCategory = {
    databaseId: number
    name: string
}

export type TAuthor = {
    databaseId: number
    name: string
}

export type TSeo = {
    title: string
    metaDesc: string
    metaKeywords: string
}