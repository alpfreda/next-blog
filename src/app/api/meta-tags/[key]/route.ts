import { DB } from '@/constants/consent'
import { handleErrorResponse } from '@/utils/error-response'
import { Filter } from 'firebase-admin/firestore'
import { NextRequest, NextResponse } from 'next/server'
import { get } from '../../../../utils/firebase'

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
