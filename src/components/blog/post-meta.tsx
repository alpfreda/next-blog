'use client'

import { addLike } from '@/app/blog/[slug]/action'
import { NotificationItem } from '@/interfaces/notification-item.interface'
import { Post } from '@/interfaces/post.interface'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { ActionTypes, useNotifications } from '../notifications/notification-context'
import Icon from '../svg'

interface PostMetaProps {
  post?: Post
  className?: string
}

const PostMeta: React.FC<PostMetaProps> = ({ post, className }) => {
  const [innerPost, setInnerPost] = useState(post)
  const { dispatch } = useNotifications()

  useEffect(() => {
    setInnerPost(post)
  }, [post])

  const addNotification = (notification: NotificationItem) => {
    dispatch({ type: ActionTypes.ADD_NOTIFICATION, payload: notification })
  }

  const onLike = async () => {
    if (post) {
      const newPost = await addLike(post.id)
      setInnerPost(newPost)
    }
  }

  function onCopy() {
    navigator.clipboard.writeText(window.location.href)
    addNotification({
      id: 'BLOG_SUCCESS_COPY',
      message: 'Share URL successfully copied to clipboard.',
      type: 'SUCCESS',
    })
  }

  const scrollToTop = () => {
    const comments = document.getElementById('blog-comments')
    comments?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={['blog-detail-meta', className].join(' ')}>
      <div className='blog-detail-meta-item date'>
        <Icon name='clock' />
        <span>{moment(innerPost?.createdAt).format('lll')}</span>
      </div>
      <div
        className='blog-detail-meta-item'
        onClick={onLike}>
        <Icon name='heart-2' />
        {innerPost && innerPost.like > 0 && <span>{innerPost.like}</span>}
      </div>
      <div
        className='blog-detail-meta-item'
        onClick={scrollToTop}>
        <Icon name='comment' />
        {innerPost && innerPost.comment > 0 && <span>{innerPost.comment}</span>}
      </div>
      <div
        className='blog-detail-meta-item'
        onClick={onCopy}>
        <Icon name='share' />
      </div>
    </div>
  )
}

export default PostMeta
