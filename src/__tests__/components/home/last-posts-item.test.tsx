import LastPostItem from '@/components/home/last-posts-item'
import { Post } from '@/interfaces/post.interface'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

const samplePost: Post = {
  id: '1',
  slug: 'sample-post',
  title: 'Sample Post Title',
  summary: 'This is a summary of the sample post.',
  img: '/sample-image.jpg',
  content: 'This is the content of the sample post.',
  createdAt: '2023-09-20T10:00:00Z',
  like: 10,
  comment: 5,
  view: 100,
  visible: true,
}

describe('LastPostItem', () => {
  it('renders the LastPostItem with correct content and link', () => {
    render(<LastPostItem item={samplePost} />)

    const titleElement = screen.getByText(samplePost.title)
    const summaryElement = screen.getByText(samplePost.summary)
    const imageElement = screen.getByAltText(samplePost.title)

    expect(titleElement).toBeInTheDocument()
    expect(summaryElement).toBeInTheDocument()
    expect(imageElement).toBeInTheDocument()

    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', `/blog/${samplePost.slug}`)
  })
})
