import { DefaultTheme } from 'styled-components'
import { common } from './common'

const light: DefaultTheme = {
  title: 'light',
  color: {
    neutral: { ...common.colors.neutral },
    background: '',
    heading: '',
    body: '',
    primary: {
      100: '#662347',
      90: '#802c59',
      80: '#b33d7d',
      50: '#ff57b2',
      20: '#ff89c9',
      10: '#ffbce0'
    },
    secondary: {
      100: '#041341',
      90: '#061957',
      80: '#082583',
      50: '#0d38c4',
      20: '#3e65e1',
      10: '#9fb2f0'
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

export { light }
