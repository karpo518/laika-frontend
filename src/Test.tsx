import React, { CSSProperties, FC } from 'react'

type TProps = {style:CSSProperties, counter: number}

export const Test:FC<TProps>  = React.memo(function Test ({style, counter}) {
  console.log('Test render')
  return (
    <div style={style}>{counter}</div>
  )
})

// Test.whyDidYouRender = true