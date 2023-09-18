'use client'

import { useEffect, useState } from 'react'

const useGoTop = (): {
  show: boolean
  scrollToTop: () => void
} => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', isScroll)
    return () => {
      window.removeEventListener('scroll', isScroll)
    }
  }, [])

  const isScroll = () => {
    setShow(window.scrollY >= 300)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return { show, scrollToTop }
}

export { useGoTop }
