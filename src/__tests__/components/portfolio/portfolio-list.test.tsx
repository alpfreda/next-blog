import PortfolioList from '@/components/portfolio/portfolios-list'
import { Portfolio } from '@/interfaces/portfolio.interface'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

const samplePortfolioData: Portfolio[] = [
  {
    id: '1',
    title: 'Project 1',
    description: 'Description 1',
    source: 'https://github.com/project1',
    demo: 'https://demo.project1.com',
    order: 1,
    technologies: ['react', 'angular'],
  },
  {
    id: '2',
    title: 'Project 2',
    description: 'Description 2',
    source: 'https://github.com/project2',
    demo: 'https://demo.project2.com',
    order: 2,
    technologies: ['javascript', 'typescript'],
  },
]

describe('PortfolioList', () => {
  it('renders the list of portfolio items', () => {
    render(<PortfolioList items={samplePortfolioData} />)

    samplePortfolioData.forEach(item => {
      const titleElement = screen.getByText(item.title)

      expect(titleElement).toBeInTheDocument()
    })
  })

  it('renders the correct number of portfolio items', () => {
    render(<PortfolioList items={samplePortfolioData} />)

    const portfolioItems = screen.getAllByTestId('portfolio-item')
    expect(portfolioItems).toHaveLength(samplePortfolioData.length)
  })

  it('displays technologies as a list for each portfolio item', () => {
    render(<PortfolioList items={samplePortfolioData} />)

    samplePortfolioData.forEach(item => {
      const technologiesList = screen.getByTestId(`technologies-${item.id}`)
      expect(technologiesList).toBeInTheDocument()
      item.technologies.forEach(tech => {
        const techElement = screen.getByText(tech)
        expect(techElement).toBeInTheDocument()
      })
    })
  })
})
