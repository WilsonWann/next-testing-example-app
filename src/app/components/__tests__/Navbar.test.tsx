import { render, screen } from '@testing-library/react'
import Navbar from '../Navbar'

describe('Navbar', () => {
  it('should render the Navbar component', () => {
    render(<Navbar />) // ARRANGE

    const headerElement = screen.getByText('Next Todos') // ACT

    expect(headerElement).toBeInTheDocument() // ASSERT
  })
})
