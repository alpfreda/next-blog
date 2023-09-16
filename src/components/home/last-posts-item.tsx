import { Post } from '@/interfaces/post.interface'
import Image from 'next/image'
import Link from 'next/link'

interface LastPostItemProps {
  item: Post
}

const LastPostItem: React.FC<LastPostItemProps> = ({ item }) => {
  return (
    <Link
      href={`/blog/${item.slug}`}
      className='last-post-item'>
      <h4 className='title'>{item.title}</h4>
      <p className='summary'>{item.summary}</p>
      <div className='img-box'>
        <Image
          src={item.img}
          width={300}
          height={150}
          alt={item.title}
        />
      </div>
    </Link>
  )
}

export default LastPostItem
