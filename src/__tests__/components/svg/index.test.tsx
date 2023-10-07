import Icon from '@/components/svg/index'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

describe('Icon', () => {
  it('renders the specified icon', () => {
    const iconName = 'cancel'
    const { getByRole } = render(<Icon name={iconName} />)

    const iconElement = getByRole('img')
    expect(iconElement).toBeInTheDocument()
  })

  it('renders the specified icon with a custom size', () => {
    const iconName = 'cancel'
    const customSize = 20
    const { getByRole } = render(
      <Icon
        name={iconName}
        size={customSize}
      />,
    )

    const iconElement = getByRole('img')

    expect(iconElement).toBeInTheDocument()
    expect(iconElement.getAttribute('width')).toBe('20')
    expect(iconElement.getAttribute('height')).toBe('20')
  })
})
