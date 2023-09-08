import { Portfolio } from '@/interfaces/portfolio.interface'
import Icon from '../svg'

interface PortfolioItemProps {
  item: Portfolio
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item }) => {
  return (
    <div className='portfolio-item'>
      <h4 className='title'>{item.title}</h4>
      <div className='portfolio-item-technologies'>
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
          <Icon
            name='github'
            size={18}
          />
          Demo
        </a>
        <a
          href={item.source}
          className='btn source'
          target='_blank'>
          <Icon
            name='global'
            size={18}
          />
          Source
        </a>
      </div>
    </div>
  )
}

export default PortfolioItem
