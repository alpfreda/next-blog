import Footer from '@/components/layout/footer'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

describe('Footer', () => {
  it('renders the Footer component with link', () => {
    const { getByRole } = render(<Footer />)

    const githubLink = getByRole('link')
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/alpfreda/next-blog')
  })
})
