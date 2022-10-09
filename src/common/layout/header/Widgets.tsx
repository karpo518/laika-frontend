import { faAddressBook, faBars, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import { TMenuItem } from './Header'
import { SiderToggler } from './SiderToggler'
import SearchWidget from './SearchWidget'

type TProps = {
  catMenuItems: TMenuItem[]
}

export let Widgets: FC<TProps> = ({catMenuItems}) => {
  
  const isAuth = false
  
  return (
        <Container>
          <SearchWidget />
          { isAuth
            ? <UserWidget>
                User links
              </UserWidget> 
            : <AuthWidget>
                <Item data-type="login" >
                  <SNavLink to={'/page/login'}><SIcon icon={faUser} /><SLinkText>Вход</SLinkText></SNavLink>
                </Item>
                <Item data-type="register" >
                  <SNavLink to={'/page/register'}><SIcon icon={faAddressBook} /><SLinkText>Регистрация</SLinkText></SNavLink>
                  </Item>
              </AuthWidget>
          }
          <SiderToggler items={catMenuItems} />
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  @media ${theme.media.medium} {
    margin-right: 0px;
  }
`
const AuthWidget = styled.ul`
  display: flex;
  list-style-type: none;
  padding-left: 0px;
`
const UserWidget = styled.ul``

const Item = styled.li`
  margin-right: 25px;
  &:last-child {
    margin-right: 0px;
  }

  @media ${theme.media.smallMedium} {
    margin-right: 0px;

    &[data-type=register] {
      display: none;
    }
  }
`

const SNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${theme.colors.link};
  white-space: nowrap;
`

const SIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`

const SLinkText = styled.span`

  @media ${theme.media.extraSmall} {

    ${Item}[data-type="login"] & {
      display: none;
    }
  }
`