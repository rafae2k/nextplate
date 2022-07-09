import type { AppProps } from 'next/app'
import GlobalStyle from '../../styles/globalStyles'
import { StyledThemeProvider } from '../../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </StyledThemeProvider>
  )
}

export default MyApp
