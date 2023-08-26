'use client'

import { NavLink } from '@/interfaces/navlink.interface'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './logo'

const Navbar = () => {
  const pathname = usePathname()
  const navLinks: NavLink[] = [
    { name: 'Home', link: '/' },
    { name: 'Blog', link: '/blog' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contact' },
  ]
  return (
    <nav className='navbar'>
      <ul>
        <li className='nav-logo'>
          <Link href='/'>
            <Logo />
          </Link>
        </li>
        {navLinks.map(navItem => {
          const isActive: boolean = navItem.link === pathname
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
