'use client'

import { useHeader } from './hooks/header-hook'
import Navbar from './navbar'

const Header: React.FC = () => {
  const { classes } = useHeader()

  return (
    <header data-testid='header' className={classes}>
      <Navbar />
    </header>
  )
}

export default Header
