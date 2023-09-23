import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import HeaderTitle from '../../../components/common/header-title'

describe('HeaderTitle', () => {
  it('renders the title correctly', () => {
    const title = 'Test Title'
    const { getByText } = render(<HeaderTitle title={title} />)

    // Use Jest matchers from jest-dom to make assertions
    expect(getByText(title)).toBeInTheDocument()
  })
})
