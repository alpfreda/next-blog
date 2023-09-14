import { DB } from '@/constants/db'
import { handleErrorResponse } from '@/utils/error-response'
import { NextResponse } from 'next/server'
import { get } from '../../../utils/firebase'

export async function GET() {
  try {
    const getContactInfo = await get(DB.CONTACT_INFO)
    return NextResponse.json(getContactInfo)
  } catch (e) {
    return handleErrorResponse(e)
  }
}
