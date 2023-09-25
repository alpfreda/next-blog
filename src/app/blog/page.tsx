import Posts from '@/components/blog/posts-list'
import HeaderTitle from '@/components/common/header-title'
import { META_TAGS, URLS } from '@/constants/consent'
import { MetaTag } from '@/interfaces/meta-tag.interface'
import { Post } from '@/interfaces/post.interface'
import { getReq } from '@/utils/next-axios'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const metaTag = await getReq<MetaTag>(`${URLS.META_TAGS}/${META_TAGS.BLOG}`)

  return {
    title: metaTag.title,
    description: metaTag.description,
    keywords: metaTag.keywords,
  }
}

const Blog: React.FC = async () => {
  const posts = await getReq<Post[]>(URLS.BLOG)

  return (
    <section className='blog'>
      <HeaderTitle title='Posts' />
      <Posts items={posts} />
    </section>
  )
}

export default Blog
