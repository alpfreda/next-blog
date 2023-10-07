import UserIntro from '@/components/home/user-intro'
import { Intro } from '@/interfaces/intro.interface'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

const sampleIntro: Intro = {
  id: '1',
  avatar: '/sample-avatar.jpg',
  name: 'John Doe',
  title: 'Software Developer',
}

describe('UserIntro', () => {
  it('renders the UserIntro component with correct content', () => {
    render(<UserIntro intro={sampleIntro} />)

    const avatarImage = screen.getByAltText(sampleIntro.name)
    expect(avatarImage).toBeInTheDocument()

    const nameElement = screen.getByText(sampleIntro.name)
    const titleElement = screen.getByText(sampleIntro.title)

    expect(nameElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
  })
})
