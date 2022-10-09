import styled from 'styled-components'
import { theme } from '../../../styles/theme'

export const Container = styled.div`
  position: relative;
`
export const Toggler = styled.div`
  margin-right: 30px;
  cursor: pointer;
  @media ${theme.media.small} {
    margin-right: 20px;
  }
`

export const Form = styled.form`
  position: absolute;
  right: -20px;
  top: calc(100% + 20px);
  z-index: 9;
  white-space : nowrap; /* this does the trick */
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  background: ${theme.colors.bgLayout};
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  padding: 5px;

  &:focus-visible {
    outline: none;
  }
`

export const Input = styled.input`
  padding-left: 5px;
  padding-right: 5px;
  width: 200px;
  color: ${theme.colors.text};
  height: 38px;
  font-size: ${theme.fontSize.default};
  border: none;

`
export const Button = styled.button<TButtonProps>`
  color: ${props => props.allowed ? theme.colors.text : theme.colors.textLight};
  height: 38px;
  width: 38px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
type TButtonProps = {
  type: 'submit';
  allowed: boolean;
}