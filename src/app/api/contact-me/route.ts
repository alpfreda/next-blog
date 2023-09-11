import { handleErrorResponse } from '@/utils/error-response'
import { NextResponse } from 'next/server'
import { add } from '../../../utils/firebase'

export async function POST(request: Request) {
  try {
    const { message } = await request.json()
    const result = await add('contact-me', { message: message, date: new Date().toISOString() })
    return NextResponse.json(result)
  } catch (e) {
    return handleErrorResponse(e)
  }
}