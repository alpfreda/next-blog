'use client'

import { useEffect, useState } from 'react'
import Icon from '../svg'

const GoTop: React.FC = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', isScroll)
    return () => {
      window.removeEventListener('scroll', isScroll)
    }
  }, [])

  const isScroll = () => {
    setShow(window.scrollY >= 200)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return show ? (
    <div
      className='go-top'
      onClick={scrollToTop}>
      <Icon name='top' size={25}/>
    </div>
  ) : null
}

export default GoTop
