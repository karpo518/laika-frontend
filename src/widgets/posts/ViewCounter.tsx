import React, { FC } from 'react'
import styled from 'styled-components'

type TProps = {count: number}

export const ViewCounter:FC<TProps> = (props) => {
  return (
    <S.ViewCount>
        <S.VCIcon /><S.VCValue>{props.count}</S.VCValue>
    </S.ViewCount>
  )
}

const S = {
  ViewCount: styled.div`
    & div {
      font-size: 14px;
    }
  `,
  VCIcon: styled.div`
    margin-right: 7px;
    width: 13px;
    display: inline-block;
    height: 13px;
    border: solid 1px #000;
    border-radius: 75% 15%;
    position: relative;
    transform: rotate(45deg);
    top: 1px;
    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 2px;
      height: 2px;
      border: solid 1px #000;
      border-radius: 50%;
      left: 3px;
      top: 3px;
    }
  `,
  VCValue: styled.div`
    display: inline-block;
  `
}