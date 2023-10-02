import { DB } from '@/constants/consent'
import { Post } from '@/interfaces/post.interface'
import { handleErrorResponse } from '@/utils/error-response'
import { NextRequest, NextResponse } from 'next/server'
import { add, getById } from '../../../utils/firebase'

async function addPostComment(post: Post, comment: string, ip: string) {
  return await add(DB.POST_COMMENTS, { postId: post.id, comment, ip })
}

export async function POST(request: NextRequest) {
  try {
    const { postId, comment } = await request.json()
    const ip = (request.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
    const post = await getById(DB.POSTS, postId)

    const returnPost = await addPostComment(post, comment, ip)
    return NextResponse.json(returnPost)
  } catch (e) {
    return handleErrorResponse(e)
  }
}
