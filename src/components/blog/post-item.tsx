import { URLS } from '@/constants/consent'
import { Post } from '@/interfaces/post.interface'
import Image from 'next/image'
import Link from 'next/link'

interface PostItemProps {
  item: Post
}

const PostItem: React.FC<PostItemProps> = ({ item }) => {
  return (
    <Link
      href={`/${URLS.BLOG}/${item.slug}`}
      className='blog-item'>
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

export default PostItem
