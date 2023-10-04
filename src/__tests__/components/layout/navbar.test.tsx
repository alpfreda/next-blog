import Navbar from '@/components/layout/navbar'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Navbar', () => {
  it('renders the Navbar component', () => {
    render(<Navbar />)
    const navbarElement = screen.getByRole('navigation')
    expect(navbarElement).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const navLinks = screen.getAllByRole('link')
    expect(navLinks).toHaveLength(5)
  })
})
