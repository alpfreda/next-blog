import { ContactInfo } from '@/interfaces/contact-info.interface'
import { ContactMe } from '@/interfaces/contact-me.interface'
import { Intro } from '@/interfaces/intro.interface'
import { Portfolio } from '@/interfaces/portfolio.interface'
import { PostLike } from '@/interfaces/post-like.interface'
import { PostView } from '@/interfaces/post-view.interface'
import { Post } from '@/interfaces/post.interface'

export const postMockData: Post = {
  title: 'Your Post title',
  summary: 'Summary of your post',
  img: 'https://placehold.co/800x400/EEE/31343C',
  slug: 'your-slug-name-should-be-unique',
  content: 'markdown-file-name', // should be located inside the project /markdowns/...
  createdAt: new Date().toISOString(), // ISOstring format
  like: 0,
  comment: 0,
  view: 0,
  visible: true,
}

export const introMockData: Intro = {
  name: 'Your Name, Your title !',
  title: 'Introduce yourself here.',
  avatar: 'https://placehold.co/400x400/EEE/31343C',
}

export const contactInfoMockData: ContactInfo = {
  github: {
    link: 'https://www.github.com/YourGithubAccount',
    title: 'github.com/YourGithubAccount',
  },
  linkedin: {
    link: 'https://www.linkedin.com/in/YourLinkedinAccount',
    title: 'linkedin.com/in/YourLinkedinAccount',
  },
  email: {
    link: 'mailto:contact@yourmail.com',
    title: 'contact@yourmail.com',
  },
}

export const contactMeMockData: ContactMe = {
  date: new Date().toISOString(),
  ip: 'Ip address',
  message: 'Message has send'
}

export const portfolioMockData: Portfolio = {
  title: 'Your portfolio title',
  source: 'https://www.githup.com/xxxx',
  demo: 'https://www.xxxx.com',
  order: 0,
  technologies: ['react', 'angular'],
}

export const postLikeMockData: PostLike = {
  ip: 'ip address',
  postId: 'post id'
}

export const postViewMockData: PostView = {
  ip: 'ip address',
  postId: 'post id'
}
