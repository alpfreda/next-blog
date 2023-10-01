import { Intro } from '@/interfaces/intro.interface'
import Image from 'next/image'

interface UserIntroProps {
  intro?: Intro
}

const UserIntro: React.FC<UserIntroProps> = ({ intro }) => {
  return (
    <section className='intro'>
      <div className='avatar'>
        <Image
          src={intro?.avatar || ''}
          width={200}
          height={100}
          alt={intro?.name || ''}
        />
      </div>
      <h1 className='name'>{intro?.name}</h1>
      <h3 className='title'>{intro?.title}</h3>
    </section>
  )
}

export default UserIntro
