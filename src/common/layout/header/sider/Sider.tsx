import { faMinus } from '@fortawesome/free-solid-svg-icons'
import React, { FC, MutableRefObject } from 'react'
import { TMenuItem } from '../Header'
import * as S from './Sider.styled'

type TProps = {
    items: TMenuItem[], 
    isOpen: boolean, 
    onClose: () => void,
    siderRef: MutableRefObject<HTMLElement>
}

export const Sider: FC<TProps> = React.memo(({items, isOpen, onClose, siderRef}) => {
  
  const menuList = items.map( (i: TMenuItem) => <S.Item key={i.id} ><S.SNavLink to={`/category/${i.id}`} >{i.name}</S.SNavLink></S.Item>)
  
  return (
            <S.Nav data-open={isOpen} ref={siderRef} >
              <S.Heading >
                <S.Title>Меню</S.Title>
                <S.СloseButton onClick={() => onClose() }>
                  <S.ButtonText>Закрыть</S.ButtonText>
                  <S.ButtonIcon><S.Icon icon={faMinus} size="xl" /></S.ButtonIcon>
                </S.СloseButton>
              </S.Heading>
              <S.MenuWrap>
                <S.MenuTitle>Категории</S.MenuTitle>
                <S.MenuItems>{menuList}</S.MenuItems>
              </S.MenuWrap>
            </S.Nav>
    )
})


