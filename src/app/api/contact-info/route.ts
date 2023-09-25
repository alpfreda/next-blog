import { DB } from '@/constants/consent'
import { handleErrorResponse } from '@/utils/error-response'
import { get } from '@/utils/firebase'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const getContactInfo = await get(DB.CONTACT_INFO)
    return NextResponse.json(getContactInfo)
  } catch (e) {
    return handleErrorResponse(e)
  }
}
