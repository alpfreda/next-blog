import Header from '@/components/layout/header'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

jest.mock('../../../components/layout/hooks/header-hook', () => ({
  useHeader: () => ({
    classes: 'header-class',
  }),
}))

// eslint-disable-next-line react/display-name
jest.mock('../../../components/layout/navbar', () => () => <div data-testid='mocked-navbar' />)

describe('Header', () => {
  it('renders the Header component with the correct classes', () => {
    const { getByTestId } = render(<Header />)
    const headerElement = getByTestId('header')

    expect(headerElement).toBeInTheDocument()
    expect(headerElement).toHaveClass('header-class')
  })

  it('renders the Navbar component', () => {
    const { getByTestId } = render(<Header />)
    const navbarElement = getByTestId('mocked-navbar')

    expect(navbarElement).toBeInTheDocument()
  })
})
