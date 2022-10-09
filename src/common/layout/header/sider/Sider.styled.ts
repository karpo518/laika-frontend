import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../../styles/theme"

export const Nav = styled.nav`
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #fff;
  transform:translate3d(300px, 0, 0);
  transition: transform 0.5s;
  &[data-open="true"] 
  {
    transform:translate3d(0, 0, 0);
  }
`
export const Heading = styled.div`
  padding: 28px 20px;
  background-color: #000;
  display: flex;
  margin-bottom: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`
export const Title= styled.div`
  font-size: 20px;
  text-transform: uppercase;
  color: #fff;
`

export const СloseButton= styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const ButtonText= styled.div`
  text-transform: uppercase;
  margin-right: 5px;
  font-size: 12px;
  color: #fff;
`
export const ButtonIcon= styled.div`
  color: #fff;
`

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`

export const MenuWrap = styled.div`
    padding: 0px 20px;
`

export const MenuTitle = styled.div`
  font-weight: bold;
`

export const MenuItems = styled.ul`
  padding-bottom: 20px;
  padding-left: 0px;
`

export const Item = styled.li`
  display: block;
  border-top: 1px solid rgba(34,36,38,.1);
  &:first-child {
    border-top: none;
  }
`
export const SNavLink = styled(NavLink)`
  color: ${theme.colors.link};
  text-decoration: none;
  padding: 8px 16px;
  display: block;
  width: 100%;
`