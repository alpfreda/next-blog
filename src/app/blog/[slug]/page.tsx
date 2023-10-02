import PostDetail from '@/components/blog/post-detail'
import PostDetailForm from '@/components/blog/post-detail-form'
import PostMeta from '@/components/blog/post-meta'
import HeaderTitle from '@/components/common/header-title'
import { META_TAGS, URLS } from '@/constants/consent'
import { MetaTag } from '@/interfaces/meta-tag.interface'
import { Post } from '@/interfaces/post.interface'
import { getReq } from '@/utils/next-axios'
import { Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata(): Promise<Metadata> {
  const metaTag = await getReq<MetaTag>(`${URLS.META_TAGS}/${META_TAGS.BLOG_DETAIL}`)

  return {
    title: metaTag.title,
    description: metaTag.description,
    keywords: metaTag.keywords,
  }
}

const BlogInfo = async ({ params }: { params: { slug: string } }) => {
  const post = await getReq<Post>(`${URLS.BLOG}/${params.slug}`)

  let content = ''

  try {
    const res = await fetch(post.content)
    content = await res.text()
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
        <PostDetailForm postId={post.id} />
      </div>
    </section>
  )
}

export default BlogInfo
