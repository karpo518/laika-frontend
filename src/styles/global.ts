// global.ts

import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export default createGlobalStyle`

    p,ul,ol {
        line-height: 1.5;
    } 

    body {
        background: ${theme.colors.bg};
        margin: 0px;
        box-sizing: border-box;
        font-family: 'Roboto Regular', sans-serif;
        font-size: ${theme.fontSize.default};
    }

    div {
        box-sizing: border-box;
        color: ${theme.colors.text};
    }

    a {
        text-decoration: none;
        color: ${theme.colors.link};
    }
`