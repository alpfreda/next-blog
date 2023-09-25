import { DB } from '@/constants/consent'
import { handleErrorResponse } from '@/utils/error-response'
import { NextResponse } from 'next/server'
import { doesCollectionExist } from '../../../utils/firebase'

export async function GET() {
  try {
    const doesMigrationExceeded = await doesCollectionExist(DB.MIGRATIONS)
    return NextResponse.json({ doesMigrationExceeded })
  } catch (e) {
    return handleErrorResponse(e)
  }
}