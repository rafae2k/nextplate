import { DefaultTheme } from 'styled-components'
import { common } from './common'

const dark: DefaultTheme = {
  title: 'dark',
  color: {
    neutral: { ...common },
    background: '',
    heading: '',
    body: '',
    primary: {
      100: '',
      90: '',
      80: '',
      50: '',
      20: '',
      10: ''
    },
    secondary: {
      100: '',
      90: '',
      80: '',
      50: '',
      20: '',
      10: ''
    }
  },
  padding: {
    sm: '',
    md: '',
    lg: ''
  },
  spacing: {
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0
  },
  borderRadius: {
    none: 0,
    sm: 0,
    DEFAULT: 0,
    md: 0,
    lg: 0,
    full: 0
  },
  font: {
    family: {
      sans: '',
      serif: ''
    },
    weight: {
      light: 0,
      regular: 0,
      bold: 0
    },
    size: {
      sm: '',
      md: '',
      lg: ''
    }
  },
  opacity: {
    0: 0,
    20: 0,
    40: 0,
    60: 0,
    80: 0,
    100: 0
  }
}

export { dark }
