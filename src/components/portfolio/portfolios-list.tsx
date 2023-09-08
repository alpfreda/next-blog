'use client'
import { Portfolio } from '@/interfaces/portfolio.interface'
import PortfolioItem from './portfolio-item'

interface PortfolioListProps {
  items: Portfolio[]
}

const PortfolioList: React.FC<PortfolioListProps> = ({ items }) => {
  return (
    <div className='portfolio-items'>
      {items.map(item => (
        <PortfolioItem
          key={item.title}
          item={item}
        />
      ))}
    </div>
  )
}

export default PortfolioList
