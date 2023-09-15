import { DB } from '@/constants/consent'
import { handleErrorResponse } from '@/utils/error-response'
import { NextResponse } from 'next/server'
import { list } from '../../../utils/firebase'

export async function GET() {
  try {
    const portfolios = await list(DB.PORTFOLIOS)
    return NextResponse.json(portfolios)
  } catch (e) {
    return handleErrorResponse(e)
  }
}
