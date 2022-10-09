import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const Footer = () => {
  return (
    <S.Container>
        <S.About>
            <S.AboutItem>
                <S.Heading>О лайке</S.Heading>
                <S.Content>
                    <p>В интернетах спрашивают, кто такая первая космическая лайка. 
                    Лайка - это публичная персона, космонавт, и просто хорошая собака. 
                    Впервые о ней заговорили в 2021 году, когда лайка посетила посетила 
                    лунную орбиту в составе туристической группы. С тех пор лайка регулярно 
                    посещает публичные мероприятия и ведёт светскую жизнь. 
                    Своим примером лайка вдохновляет людей по всему миру. 
                    Ведь если какая-то лайка добилась успеха, то и у тебя обязательно всё получится!</p>
                </S.Content>
              </S.AboutItem>
            <S.AboutItem>
                <S.Heading>Контакты</S.Heading>
                <S.Content>
                    <p>Лайка временно ограничила доступ к своим контактам, 
                    но совсем скоро они станут доступны. По любым вопросам 
                    пишите на <S.SLink href="mailto:admin@laika.one">admin@laika.one</S.SLink></p>
                </S.Content>
            </S.AboutItem>
        </S.About>
        <S.Copywrite>© 2022 <S.SLink href="/">laika.one</S.SLink></S.Copywrite>
    </S.Container>
  )
}

const S = {
  Container: styled.footer`
    background: ${theme.colors.bgLayout};
    border-top: 1px solid ${theme.colors.border};
  `,
  
  About: styled.div`
    display: flex;
    grid-gap: 25px;
    padding: 24px;
    flex-wrap: wrap;
    @media ${theme.media.smallMedium} {
      display: block;
      margin-bottom: 0px;
    }
  `,
  AboutItem: styled.div`
    flex: 1;
  `,
  Heading: styled.div`
    font-size: 24px;
    font-weight: bold;
    line-height: normal;
  `,
  Content: styled.div`
    margin-bottom: 10px;
  `,
  Copywrite: styled.div`
    margin: 0px auto;
    text-align: center;
    padding: 32px 0px;
    border-top: 1px solid ${theme.colors.border};
    border-bottom: 1px solid ${theme.colors.border};
  `,
  SLink: styled.a`
    text-decoration: none;
    color: ${theme.colors.link};
  `
}