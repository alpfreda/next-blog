'use client'

import Icon from '../svg'
import { useGoTop } from './hooks/go-top-hook'

const GoTop: React.FC = () => {
  const { show, scrollToTop } = useGoTop()

  return show ? (
    <div
      data-testid='go-top'
      className='go-top'
      onClick={scrollToTop}>
      <Icon
        name='top'
        size={25}
      />
    </div>
  ) : null
}

export default GoTop
