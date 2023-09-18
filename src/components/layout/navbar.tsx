'use client'

import { NavLink } from '@/interfaces/navlink.interface'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './logo'

const navLinks: NavLink[] = [
  { name: 'Home', link: '/', exact: true },
  { name: 'Blog', link: '/blog', exact: false },
  { name: 'Portfolio', link: '/portfolio', exact: false },
  { name: 'Contact', link: '/contact', exact: true },
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav
      role='navigation'
      className='navbar'>
      <ul>
        <li className='nav-logo'>
          <Link href='/'>
            <Logo />
          </Link>
        </li>
        {navLinks.map(navItem => {
          const isActive: boolean = navItem.exact ? navItem.link === pathname : pathname?.includes(navItem.link)
          return (
            <li
              key={navItem.name}
              className={['nav-item', isActive ? 'active' : ''].join(' ')}>
              <Link href={navItem.link}>{navItem.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
