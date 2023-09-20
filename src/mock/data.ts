import { Post } from '@/interfaces/post.interface'

export const post: Post = {
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
}

export const posts: Post[] = [post]
