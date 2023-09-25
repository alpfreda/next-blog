import { URLS } from '@/constants/consent'
import { NotificationItem } from '@/interfaces/notification-item.interface'
import { postReq } from '@/utils/next-axios'
import { Dispatch, SetStateAction, useState } from 'react'
import { ActionTypes, useNotifications } from '../notifications/notification-context'

const usePostDetailForm = (): {
  comment: string
  isLoading: boolean
  setComment: Dispatch<SetStateAction<string>>
  onSubmit: () => Promise<void>
} => {
  const { dispatch } = useNotifications()

  const [comment, setComment] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const addNotification = (notification: NotificationItem) => {
    dispatch({ type: ActionTypes.ADD_NOTIFICATION, payload: notification })
  }

  async function onSubmit() {
    if (!comment) {
      addNotification({
        id: 'BLOG_FILL_COMMENT',
        message: 'Please fill the comment',
        type: 'ERROR',
      })
    } else {
      setIsLoading(true)
      try {
        await postReq(URLS.BLOG_COMMENT, { comment })
        setComment('')
        addNotification({
          id: 'BLOG_SUCCESS_MESSAGE',
          message: 'Thanks 👋 Your comment successfully created.',
          type: 'SUCCESS',
        })
      } catch (e) {
        addNotification({
          id: 'BLOG_SERVER_ERROR',
          message: e instanceof Error ? e.message : 'Unexpected alert happened!',
          type: 'ERROR',
        })
      } finally {
        setIsLoading(false)
      }
    }
  }

  return { comment, isLoading, setComment, onSubmit }
}

export { usePostDetailForm }
