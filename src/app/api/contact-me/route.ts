import { DB } from '@/constants/db'
import { handleErrorResponse } from '@/utils/error-response'
import { NextRequest, NextResponse } from 'next/server'
import { add } from '../../../utils/firebase'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()
    const result = await add(DB.CONTACT_ME, { message, date: new Date().toISOString(), ip: request?.ip || '127.0.1.1' })
    return NextResponse.json(result)
  } catch (e) {
    return handleErrorResponse(e)
  }
}
