import React, { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { TPostInList } from '../../common/api/queries/post/get_all_posts'
import { DateHelper } from '../../common/helpers/DateHelper'
import { CategoryList } from './CategoryList'
import { S } from './PostPreview.styled'
import { ViewCounter } from './ViewCounter'

type TProps = { item: TPostInList }

const parsePreview: (content: string) => string = (content) => {
    const matches = content.match(/<p[^>]*>(.(?!\/p>))*<\/p>/m) || []
    return matches.length ? matches[0] : '<p></p>'
}

export const PostPreview: FC<TProps> = ({ item }) => {

    const categories = item.categories.nodes

    const preview  = useMemo(() => parsePreview(item.content), [item.content]);
    
    console.log(parsePreview(item.content))

    return (
        <S.Container>
            <S.FlexList>
                <S.ImgWrap>
                    <S.Img src={item.featuredImage.node.mediaItemUrl} alt={`thumbnail for «${item.title}»`} />
                </S.ImgWrap>
                <S.TextWrap>
                    <S.Meta><CategoryList categories={categories} /></S.Meta>
                    <S.Title><Link to={`/${item.databaseId}-${item.slug}`} >{item.title}</Link></S.Title>
                    <S.Description dangerouslySetInnerHTML={{ __html: preview }} />
                    <S.MetaInfo>
                        <S.MetaRow1>
                            <S.AuthorName><Link to={`/users/${item.author.node.databaseId}`} >{item.author.node.name}</Link></S.AuthorName>
                            <S.PublishedOn>{DateHelper.format(item.date)}</S.PublishedOn>
                        </S.MetaRow1>
                        <S.MetaRow2>
                            <ViewCounter count={0} />
                        </S.MetaRow2>
                    </S.MetaInfo>
                </S.TextWrap>
            </S.FlexList>
        </S.Container>
    )
}

