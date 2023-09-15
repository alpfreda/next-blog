import { DB } from '@/constants/consent'
import { Post } from '@/interfaces/post.interface'
import { handleErrorResponse } from '@/utils/error-response'
import { Filter } from 'firebase-admin/firestore'
import { NextRequest, NextResponse } from 'next/server'
import { add, get, getById, update } from '../../../utils/firebase'

async function getPostLikesByIp(postId: string, ip: string) {
  const filter: Filter[] = [Filter.where('postId', '==', postId), Filter.where('ip', '==', ip)]
  return await get(DB.POST_LIKES, filter)
}

async function addPostView(post: Post, ip: string = '127.0.0.1') {
  const getView = await getPostLikesByIp(post.id, ip)
  if (!getView) {
    post.like += 1
    await add(DB.POST_LIKES, { postId: post.id, ip })
    await update(DB.POSTS, post.id, { ...post, like: post.like })
  }
  return post
}

export async function POST(request: NextRequest) {
  try {
    const { postId } = await request.json()
    const post = await getById(DB.POSTS, postId)

    const returnPost = await addPostView(post, request.ip)
    return NextResponse.json(returnPost)
  } catch (e) {
    return handleErrorResponse(e)
  }
}
