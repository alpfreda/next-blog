import ContactInfo from '@/components/contact/contact-info'
import { ContactInfo as ContactInfoInterface } from '@/interfaces/contact-info.interface'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

const sampleContactInfo: ContactInfoInterface = {
  id: '1',
  github: {
    title: 'GitHub Profile',
    link: 'https://github.com/sampleuser',
  },
  linkedin: {
    title: 'LinkedIn Profile',
    link: 'https://www.linkedin.com/in/sampleuser',
  },
  email: {
    title: 'Email Address',
    link: 'mailto:sampleuser@example.com',
  },
}

describe('ContactInfo', () => {
  it('renders all links', () => {
    render(<ContactInfo contactInfo={sampleContactInfo} />)
    const navLinks = screen.getAllByRole('link')
    expect(navLinks).toHaveLength(3)
  })

  it('renders the ContactInfo component with default values when contactInfo is not provided', () => {
    render(<ContactInfo contactInfo={undefined} />)

    const iconElements = screen.queryAllByText(/GitHub Profile|LinkedIn Profile|Email Address/)
    expect(iconElements.length).toBe(0)
  })
})
