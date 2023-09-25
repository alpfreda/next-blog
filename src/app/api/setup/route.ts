import { contactInfoMockData, contactMeMockData, introMockData, portfolioMockData, postLikeMockData, postMockData, postViewMockData } from '@/mock/data'
import { handleErrorResponse } from '@/utils/error-response'
import { NextResponse } from 'next/server'
import { createDB } from '../../../utils/firebase'

export async function POST() {
  try {
    await createDB('test', introMockData)
    await createDB('test1', contactInfoMockData)
    await createDB('test2', postMockData)
    await createDB('test3', portfolioMockData)
    await createDB('test4', contactMeMockData)
    await createDB('test5', postLikeMockData)
    await createDB('test6', postViewMockData)
    await createDB('migrations', { exceeded: true })

    return NextResponse.json({message: 'Migration completed successfully.'})
  } catch (e) {
    return handleErrorResponse(e)
  }
}
