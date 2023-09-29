import { DB } from '@/constants/consent'
import { Intro } from '@/interfaces/intro.interface'
import { createDB, doesCollectionExist } from '@/utils/firebase'

const init = async () => {
  initIntro()
}

const initIntro = async () => {
  const doesExistIntro = doesCollectionExist(DB.INTRO)
  if (!doesExistIntro) {
    const intro: Intro = {
      name: 'Your Name, Your title !',
      title: 'Introduce yourself here.',
      avatar: 'https://placehold.co/400x400/EEE/31343C',
    }
    await createDB(DB.INTRO, intro)
    console.log('\x1b[32m  ✔ ', `\x1b[37m [${DB.INTRO}] Created successfully - ${new Date().toLocaleTimeString()}`)
  } else {
    console.log('\x1b[32m  × ', `\x1b[37m [${DB.INTRO}] Already exist - ${new Date().toLocaleTimeString()}`)
  }
}

init()
