import { Post } from '@/interfaces/post.interface'
import Image from 'next/image'
import Link from 'next/link'

interface PostItemProps {
  item: Post
}

const PostItem: React.FC<PostItemProps> = ({ item }) => {
  return (
    <Link href={`/blog/${item.slug}`} className='blog-item'>
      <h4 className='title'>{item.title}</h4>
      <p className='summary'>{item.summary}</p>
      <Image
        src={item.img}
        width={400}
        height={200}
        alt={item.title}
      />
    </Link>
  )
}

export default PostItem
