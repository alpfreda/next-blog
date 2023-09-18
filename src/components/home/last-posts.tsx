import { Post } from '@/interfaces/post.interface'
import LastPostItem from './last-posts-item'

interface PostsListProps {
  items: Post[]
}

const LastPosts: React.FC<PostsListProps> = ({ items }) => {
  return (
    <section data-testid='last-posts' className='last-posts'>
      <h3 className='l-title'>Latest Posts</h3>
      <div className='last-post-items'>
        {items.map(item => (
          <LastPostItem
            key={item.slug}
            item={item}
          />
        ))}
      </div>
    </section>
  )
}

export default LastPosts
