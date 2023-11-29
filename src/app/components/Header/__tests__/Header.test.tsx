import { render, screen } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('should render the "Next Todos" heading', () => {
    render(<Header title='Next Todos' />) // ARRANGE

    //ACT
    const header = screen.getByRole('heading', {
      name: 'Next Todos'
    })

    expect(header).toBeInTheDocument() // ASSERT
  })

  it('should render "Wilson" as a heading', async () => {
    render(<Header title='Wilson' />) // ARRANGE

    //ACT
    const header = screen.getByRole('heading', {
      name: 'Wilson'
    })

    expect(header).toBeInTheDocument() // ASSERT
  })
})
