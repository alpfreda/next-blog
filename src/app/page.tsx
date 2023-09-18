import LastPosts from '@/components/home/last-posts'
import UserIntro from '@/components/home/user-intro'
import { META_TAGS, URLS } from '@/constants/consent'
import { Intro } from '@/interfaces/intro.interface'
import { MetaTag } from '@/interfaces/meta-tag.interface'
import { Post } from '@/interfaces/post.interface'
import axios from 'axios'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const metaTagResponse = await axios.get<MetaTag>(`${process.env.API_URL}/${URLS.META_TAGS}/${META_TAGS.HOME}`)

  return {
    title: metaTagResponse.data.title,
    description: metaTagResponse.data.description,
    keywords: metaTagResponse.data.keywords,
  }
}

export default async function Page() {
  const introResponse = await axios.get<Intro>(`${process.env.API_URL}/${URLS.INTRO}`)
  const intro = introResponse.data

  const lastPostsResponse = await axios.get<Post[]>(`${process.env.API_URL}/${URLS.LAST_POSTS}`)
  const posts = lastPostsResponse.data

  return (
    <>
      <UserIntro intro={intro} />
      <LastPosts items={posts} />
    </>
  )
}
