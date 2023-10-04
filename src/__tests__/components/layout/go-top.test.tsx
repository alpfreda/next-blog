import GoTop from '@/components/layout/go-top'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'

// Mock the useGoTop hook
jest.mock('../../../components/layout/hooks/go-top-hook', () => ({
  useGoTop: () => ({
    show: true,
    scrollToTop: jest.fn(),
  }),
}))

describe('Go Top', () => {
  it('renders the GoTop button when show is true', () => {
    const { getByTestId } = render(<GoTop />)
    const goTopButton = getByTestId('go-top')
    expect(goTopButton).toBeInTheDocument()
  })

  it('calls scrollToTop when clicked', () => {
    const { getByTestId } = render(<GoTop />)
    const goTopButton = getByTestId('go-top')

    fireEvent.click(goTopButton)

    expect(goTopButton).toBeInTheDocument()
    expect(goTopButton).toHaveAttribute('data-testid', 'go-top')
  })

  it('does not render the GoTop button when show is false', () => {
    jest.spyOn(require('../../../components/layout/hooks/go-top-hook'), 'useGoTop').mockReturnValue({
      show: false,
      scrollToTop: jest.fn(),
    })

    const { queryByTestId } = render(<GoTop />)
    const goTopButton = queryByTestId('go-top')

    expect(goTopButton).toBeNull()
  })
})
