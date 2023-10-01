import { DB } from '@/constants/consent'
import { contactInfoMockData, contactMeMockData, introMockData, portfolioMockData, postLikeMockData, postMockData, postViewMockData } from '@/mock/data'
import { handleErrorResponse } from '@/utils/error-response'
import { NextResponse } from 'next/server'
import { createDB, doesCollectionExist } from '../../../utils/firebase'

export async function POST() {
  try {
    const doesMigrationExceeded = await doesCollectionExist(DB.MIGRATIONS)
    if (doesMigrationExceeded) {
      NextResponse.json({ message: 'Migration has already been completed.' }, { status: 400 })
    }

    await createDB(DB.INTRO, introMockData)
    await createDB(DB.CONTACT_INFO, contactInfoMockData)
    await createDB(DB.CONTACT_ME, contactMeMockData)
    await createDB(DB.POSTS, postMockData)
    await createDB(DB.PORTFOLIOS, portfolioMockData)
    await createDB(DB.POST_LIKES, postLikeMockData)
    await createDB(DB.POST_VIEWS, postViewMockData)
    await createDB(DB.MIGRATIONS, { exceeded: true })

    return NextResponse.json({ message: 'Migration completed successfully.' })
  } catch (e) {
    return handleErrorResponse(e)
  }
}
