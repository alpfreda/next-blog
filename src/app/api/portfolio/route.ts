import { handleErrorResponse } from '@/utils/error-response'
import { NextResponse } from 'next/server'
import { list } from '../../../utils/firebase'

export async function GET() {
  try {
    const portfolios = await list('portfolios')
    return NextResponse.json(portfolios)
  } catch (e) {
    return handleErrorResponse(e)
  }
}
