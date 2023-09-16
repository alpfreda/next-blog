import PostDetail from '@/components/blog/post-detail'
import PostDetailForm from '@/components/blog/post-detail-form'
import PostMeta from '@/components/blog/post-meta'
import HeaderTitle from '@/components/header-title'
import { META_TAGS, URLS } from '@/constants/consent'
import { MetaTag } from '@/interfaces/meta-tag.interface'
import { Post } from '@/interfaces/post.interface'
import axios from 'axios'
import { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const metaTagResponse = await axios.get<MetaTag>(`${process.env.API_URL}/${URLS.META_TAGS}/${META_TAGS.BLOG_DETAIL}`)
  const postResponse = await axios.get<Post>(`${process.env.API_URL}/${URLS.BLOG}/${params.slug}`)

  return {
    title: `${metaTagResponse.data.title} - ${postResponse.data.title}`,
    description: metaTagResponse.data.description,
    keywords: metaTagResponse.data.keywords,
  }
}

const BlogInfo = async ({ params }: { params: { slug: string } }) => {
  const data = await axios.get<Post>(`${process.env.API_URL}/${URLS.BLOG}/${params.slug}`)
  const post: Post = data.data
  let content = ''

  try {
    const markdownData = await require(`../../../markdown/${post.content}.md`)
    content = markdownData.default
  } catch {}

  return (
    <section className='blog-detail'>
      <div className='blog-detail-picture'>
        <Image
          src={post.img}
          width={400}
          height={200}
          alt={post.title}
        />
      </div>
      <HeaderTitle title={post.title} />
      <div className='blog-detail-body'>
        <PostMeta post={post} />
        <PostDetail content={content} />
        <PostMeta
          post={post}
          className='bottom'
        />
        <PostDetailForm />
      </div>
    </section>
  )
}

export default BlogInfo
