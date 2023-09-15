import { DB } from '@/constants/consent'
import { handleErrorResponse } from '@/utils/error-response'
import { NextResponse } from 'next/server'
import { list } from '../../../utils/firebase'

export async function GET() {
  try {
    const posts = await list(DB.POSTS)
    return NextResponse.json(posts.filter(post => post))
  } catch (e) {
    return handleErrorResponse(e)
  }
}
