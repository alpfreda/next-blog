'use client'

import { useEffect, useState } from 'react'

const useHeader = () => {
  const [sticky, setSticky] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])

  const isSticky = () => {
    const scrollTop = window.scrollY
    setSticky(scrollTop >= 100 ? 'is-sticky' : '')
  }

  const classes = `header-section ${sticky}`

  return { classes }
}

export { useHeader }
