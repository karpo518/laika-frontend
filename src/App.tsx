import React, { useEffect, useState } from "react"
import { Header } from "./common/layout/header/Header"
import { Sidebar } from "./common/layout/sidebar/Sidebar"
import {S} from './App.styles'
import GlobalStyles from './styles/global'
import {Test} from "./Test"
import { Footer } from "./common/layout/footer/Footer"
import { Content } from "./common/layout/content/Content"

const App = () => {
/*
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    const timer = setTimeout(() => setCounter(c => c + 1), 10000 )
    return () => clearTimeout(timer)
  }, [counter])
*/

  return (
    <S.App>
      <S.HeaderWrap>
        <Header />
      </S.HeaderWrap>
      <S.ContentWrap><Content /></S.ContentWrap>
      <S.SidebarWrap><Sidebar/></S.SidebarWrap>
      <S.FooterWrap><Footer /></S.FooterWrap>
      <GlobalStyles />
{/*       <Test counter={counter} style={{ width: '100%' }} /> */}
    </S.App>
  )
}

App.whyDidYouRender = true

export default App