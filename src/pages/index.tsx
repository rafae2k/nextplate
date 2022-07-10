import { Main } from 'components/Main'
import type { NextPage } from 'next'
import * as S from '../styles/pages/_index.styles'

const Home: NextPage = () => {
  return (
    <S.Container>
      <Main>Hello World</Main>
    </S.Container>
  )
}

export default Home
