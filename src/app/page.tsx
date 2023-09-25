import LastPosts from '@/components/home/last-posts'
import UserIntro from '@/components/home/user-intro'
import { META_TAGS, URLS } from '@/constants/consent'
import { Intro } from '@/interfaces/intro.interface'
import { MetaTag } from '@/interfaces/meta-tag.interface'
import { Post } from '@/interfaces/post.interface'
import { getReq } from '@/utils/next-axios'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const metaTag = await getReq<MetaTag>(`${URLS.META_TAGS}/${META_TAGS.HOME}`)
  return {
    title: metaTag.title,
    description: metaTag.description,
    keywords: metaTag.keywords,
  }
}

export default async function Page() {
  const intro = await getReq<Intro>(URLS.INTRO)
  const posts = await getReq<Post[]>(URLS.LAST_POSTS)

  return (
    <>
      <UserIntro intro={intro} />
      <LastPosts items={posts} />
    </>
  )
}
