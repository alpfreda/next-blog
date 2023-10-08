import PortfolioItem from '@/components/portfolio/portfolio-item'
import { Portfolio } from '@/interfaces/portfolio.interface'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

const sampleItem: Portfolio = {
  id: '1',
  title: 'Sample Project',
  technologies: ['react', 'javascript'],
  demo: 'https://demo.sample-project.com',
  source: 'https://github.com/sample-project',
  order: 0,
}

describe('PortfolioItem', () => {
  it('renders the PortfolioItem with title, technologies, and action buttons', () => {
    render(<PortfolioItem item={sampleItem} />)

    const titleElement = screen.getByText(sampleItem.title)
    expect(titleElement).toBeInTheDocument()

    sampleItem.technologies.forEach(tech => {
      const techElement = screen.getByText(tech)
      expect(techElement).toBeInTheDocument()
    })

    const demoButton = screen.getByRole('link', { name: 'Demo' })
    const sourceButton = screen.getByRole('link', { name: 'Source' })

    expect(demoButton).toBeInTheDocument()
    expect(sourceButton).toBeInTheDocument()
    expect(demoButton).toHaveAttribute('href', sampleItem.demo)
    expect(sourceButton).toHaveAttribute('href', sampleItem.source)
  })

  it('disables the source button when source is not available', () => {
    const itemWithoutSource = {
      ...sampleItem,
      source: '',
    }

    render(<PortfolioItem item={itemWithoutSource} />)

    const sourceButton = screen.getByRole('button', { name: 'Source' })
    expect(sourceButton).toBeInTheDocument()
    expect(sourceButton).toBeDisabled()
  })

  it('renders technologies as a list', () => {
    render(<PortfolioItem item={sampleItem} />)

    const technologiesContainer = screen.getByTestId(`technologies-${sampleItem.id}`)
    expect(technologiesContainer).toBeInTheDocument()

    sampleItem.technologies.forEach(tech => {
      const techElement = screen.getByText(tech)
      expect(techElement).toBeInTheDocument()
      expect(techElement.tagName).toBe('SPAN')
    })
  })
})
