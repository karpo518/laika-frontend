import { faBars, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import { TMenuItem } from './Header'
import { Sider } from './sider/Sider'
import { useOutsideMouseEvent } from '../../hooks/useOutsideMouseEvent'

type TProps = {items: TMenuItem[]}

export const SiderToggler: FC<TProps> = React.memo(({items}) => {

  const [isSiderOpen, setIsSiderOpen] = useState(false)

  const togglerRef = useRef<HTMLDivElement>(null)
  const siderRef = useRef<HTMLElement>(null)

  const toggleSider = () => setIsSiderOpen( b => !b)
  
  const onOpenSider = () => toggleSider()

  const onCloseSider = () => isSiderOpen && togglerRef.current.click()

  // const onClickOutsideSider = () => isSiderOpen && togglerRef.current.click()

  useOutsideMouseEvent([siderRef, togglerRef], onCloseSider )

  return (
        <Container>
            <Toggler onClick={onOpenSider} ref={togglerRef} ><FontAwesomeIcon icon={faBars} size="xl" /></Toggler>
            <Sider items={items} isOpen={isSiderOpen} onClose={onCloseSider} siderRef={siderRef} />
        </Container>
    )
})

const Container = styled.div`
  display: none;
  margin-left: 25px;

  @media ${theme.media.large} {
    display: block;
  }
`
const Toggler = styled.div`
  cursor: pointer;
`
