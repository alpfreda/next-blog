import { handleErrorResponse } from '@/utils/error-response'
import { Filter } from 'firebase-admin/firestore'
import { NextResponse } from 'next/server'
import { get } from '../../../../utils/firebase'

async function getPostBySlug(slug: string) {
  const filter = Filter.where('slug', '==', slug)
  return await get('posts', filter)
}

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug)
    return NextResponse.json(post)
  } catch (e: unknown) {
    return handleErrorResponse(e)
  }
}