import { DB } from '@/constants/consent'
import { handleErrorResponse } from '@/utils/error-response'
import { get } from '@/utils/firebase'
import { Filter } from 'firebase-admin/firestore'
import { NextRequest, NextResponse } from 'next/server'

async function getMetaTagByKey(key: string) {
  const filter: Filter[] = [Filter.where('key', '==', key)]
  return await get(DB.META_TAGS, filter)
}

export async function GET(request: NextRequest, { params }: { params: { key: string } }) {
  try {
    const getIntro = await getMetaTagByKey(params.key)
    return NextResponse.json(getIntro)
  } catch (e) {
    return handleErrorResponse(e)
  }
}
