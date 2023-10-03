import PostsList from '@/components/blog/posts-list'
import { Post } from '@/interfaces/post.interface'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

// Sample post data for testing
const samplePosts: Post[] = [
  {
    id: '1',
    title: 'Post 1',
    summary: 'Summary for Post 1',
    img: '/post1.jpg',
    slug: 'post-1',
    content: 'Content for Post 1',
    createdAt: '2023-01-01',
    like: 10,
    comment: 5,
    view: 100,
    visible: true,
  },
]

describe('PostsList', () => {
  it('renders a list of PostItem components', () => {
    render(<PostsList items={samplePosts} />)

    const postItems = screen.getAllByTestId('post-item')
    expect(postItems.length).toBe(samplePosts.length)

    samplePosts.forEach(post => {
      const postItem = screen.getByText(post.title)
      const summary = screen.getByText(post.summary)
      const img = screen.getByAltText(post.title)

      expect(postItem).toBeInTheDocument()
      expect(summary).toBeInTheDocument()
      expect(img).toBeInTheDocument()
    })
  })
})
