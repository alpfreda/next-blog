import { Post } from '@/interfaces/post.interface'
import PostItem from './post-item'

interface PostsListProps {
  items: Post[]
}

const PostsList: React.FC<PostsListProps> = ({ items }) => {
  return (
    <div className='blog-items'>
      {items.map(item => (
        <PostItem
          key={item.slug}
          item={item}
        />
      ))}
    </div>
  )
}

export default PostsList
