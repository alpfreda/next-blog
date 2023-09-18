import { Portfolio } from '@/interfaces/portfolio.interface'
import Icon from '../svg'

interface PortfolioItemProps {
  item: Portfolio
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  return (
    <div
      data-testid='portfolio-item'
      className='portfolio-item'>
      <h4 className='title'>{item.title}</h4>
      <div
        data-testid={`technologies-${item.id}`}
        className='portfolio-item-technologies'>
        {item.technologies.map(technology => (
          <span
            key={technology}
            className='technology-item'>
            <Icon
              name={technology.toLowerCase().replace(' ', '-')}
              size={18}
            />
            {technology}
          </span>
        ))}
      </div>
      <div className='portfolio-item-action'>
        <a
          href={item.demo}
          className='btn demo'
          target='_blank'>
          Demo
        </a>
        {item.source ? (
          <a
            href={item.source}
            className='btn source'
            target='_blank'>
            Source
          </a>
        ) : (
          <button
            disabled
            className='btn source'>
            Source
          </button>
        )}
      </div>
    </div>
  )
}

export default PortfolioItem
