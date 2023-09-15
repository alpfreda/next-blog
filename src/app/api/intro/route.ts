import { DB } from '@/constants/consent'
import { handleErrorResponse } from '@/utils/error-response'
import { NextResponse } from 'next/server'
import { get } from '../../../utils/firebase'

export async function GET() {
  try {
    const getIntro = await get(DB.INTRO)
    return NextResponse.json(getIntro)
  } catch (e) {
    return handleErrorResponse(e)
  }
}
