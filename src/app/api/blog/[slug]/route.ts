import { Post } from '@/interfaces/post.interface'
import { handleErrorResponse } from '@/utils/error-response'
import { Filter } from 'firebase-admin/firestore'
import { NextRequest, NextResponse } from 'next/server'
import { add, get, update } from '../../../../utils/firebase'

async function getPostBySlug(slug: string) {
  const filter: Filter[] = [Filter.where('slug', '==', slug)]
  return await get('posts', filter)
}

async function getPostViewByIp(postId: string, ip: string) {
  const filter: Filter[] = [Filter.where('postId', '==', postId), Filter.where('ip', '==', ip)]
  return await get('post-views', filter)
}

async function addPostView(post: Post, ip: string = '127.0.0.1') {
  const getView = await getPostViewByIp(post.id, ip)
  if (!getView) {
    await add('post-views', { postId: post.id, ip })
    await update('posts', post.id, { ...post, view: post.view + 1 })
  }
}

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug)
    await addPostView(post, request?.ip)

    return NextResponse.json(post)
  } catch (e: unknown) {
    return handleErrorResponse(e)
  }
}
