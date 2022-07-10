import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.color.neutral.black};
  color: ${({ theme }) => theme.color.neutral.white};
`
