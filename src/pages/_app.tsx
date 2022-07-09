import type { AppProps } from 'next/app'
import { StyledThemeProvider } from 'styles/theme'
import GlobalStyle from 'styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </StyledThemeProvider>
  )
}

export default MyApp
