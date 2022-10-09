export type TRubric = {
    id: number, 
    name: string
}

export type TAuthor = {
    databaseId: number
    name: string
    uri: string
    url: string
}

export type TCategory = {
    databaseId: number 
    name: string
}

export type TTag = {
    slug: string 
    name: string
}

export type TPostPreview = {
    id: number, 
    title: string, 
    description: string,
    viewCount: number,
    author: TAuthor,
    rubrics: TRubric[],
    publishedOn: string,
    imgUrl: string 
 }