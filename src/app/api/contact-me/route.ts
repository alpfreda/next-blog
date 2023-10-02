import { DB } from '@/constants/consent'
import { handleErrorResponse } from '@/utils/error-response'
import { NextRequest, NextResponse } from 'next/server'
import { add } from '../../../utils/firebase'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()
    const ip = (request.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]

    const result = await add(DB.CONTACT_ME, { message, date: new Date().toISOString(), ip })
    return NextResponse.json(result)
  } catch (e) {
    return handleErrorResponse(e)
  }
}
