import LastPosts from '@/components/home/last-posts'
import { Post } from '@/interfaces/post.interface'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

const samplePosts: Post[] = [
  {
    id: '1',
    slug: 'sample-post-1',
    title: 'Sample Post 1',
    summary: 'This is the summary of Sample Post 1.',
    img: '/sample-image-1.jpg',
    content: 'Content of Sample Post 1',
    createdAt: '2023-09-21T10:00:00Z',
    like: 15,
    comment: 8,
    view: 120,
    visible: true,
  },
  {
    id: '2',
    slug: 'sample-post-2',
    title: 'Sample Post 2',
    summary: 'This is the summary of Sample Post 2.',
    img: '/sample-image-2.jpg',
    content: 'Content of Sample Post 2',
    createdAt: '2023-09-20T10:00:00Z',
    like: 10,
    comment: 5,
    view: 100,
    visible: true,
  },
]

describe('LastPosts', () => {
  it('renders the LastPosts component with correct content', () => {
    render(<LastPosts items={samplePosts} />)

    const titleElement = screen.getByTestId('last-posts')
    expect(titleElement).toBeInTheDocument()

    samplePosts.forEach(post => {
      const postTitleElement = screen.getByText(post.title)
      const postSummaryElement = screen.getByText(post.summary)

      expect(postTitleElement).toBeInTheDocument()
      expect(postSummaryElement).toBeInTheDocument()
    })
  })
})
