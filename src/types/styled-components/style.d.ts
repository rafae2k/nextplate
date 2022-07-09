import 'styled-components'

export type Colors = {
  100: string
  90: string
  80: string
  50: string
  20: string
  10: string
}

export type SecondaryColors = Colors

export type NeutralColors = Colors & {
  white: string
  black: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'dark' | 'light'
    color: {
      neutral: NeutralColors
      background: string
      heading: string
      body: string
      primary: Colors
      secondary: SecondaryColors
    }
    padding: {
      sm: string
      md: string
      lg: string
    }
    spacing: {
      sm: number
      md: number
      lg: number
      xl: number
    }
    borderRadius: {
      none: number
      sm: number
      DEFAULT: number
      md: number
      lg: number
      full: number
    }
    font: {
      family: {
        sans: string
        serif: string
      }
      weight: {
        light: number
        regular: number
        bold: number
      }
      size: {
        sm: string
        md: string
        lg: string
      }
    }
    opacity: {
      '0': number
      '20': number
      '40': number
      '60': number
      '80': number
      '100': number
    }
  }
}
