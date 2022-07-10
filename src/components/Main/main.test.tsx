import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('<Main/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Main>Hello Rafo</Main>)

    const heading = screen.getByRole('heading', { name: /Hello Rafo/i })

    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
