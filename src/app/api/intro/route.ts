import { DB } from '@/constants/consent'
import { handleErrorResponse } from '@/utils/error-response'
import { get } from '@/utils/firebase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const getIntro = await get(DB.INTRO)
    return NextResponse.json(getIntro)
  } catch (e) {
    return handleErrorResponse(e)
  }
}
