import Posts from '@/components/blog/posts-list'
import HeaderTitle from '@/components/common/header-title'
import { META_TAGS, URLS } from '@/constants/consent'
import { MetaTag } from '@/interfaces/meta-tag.interface'
import { Post } from '@/interfaces/post.interface'
import axios from 'axios'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const metaTagResponse = await axios.get<MetaTag>(`${process.env.API_URL}/${URLS.META_TAGS}/${META_TAGS.BLOG}`)

  return {
    title: metaTagResponse.data.title,
    description: metaTagResponse.data.description,
    keywords: metaTagResponse.data.keywords,
  }
}

const Blog: React.FC = async () => {
  const data = await axios.get<Post[]>(`${process.env.API_URL}/${URLS.BLOG}`)
  const posts: Post[] = data.data

  return (
    <section className='blog'>
      <HeaderTitle title='Posts' />
      <Posts items={posts} />
    </section>
  )
}

export default Blog
