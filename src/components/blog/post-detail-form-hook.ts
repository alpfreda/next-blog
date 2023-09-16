import { create } from '@/app/contact/action'
import { NotificationItem } from '@/interfaces/notification-item.interface'
import { Dispatch, SetStateAction, useState } from 'react'
import { ActionTypes, useNotifications } from '../notifications/notification-context'

const usePostDetailForm = (): {
  comment: string
  isLoading: boolean
  setComment: Dispatch<SetStateAction<string>>
  onSubmit: (formData: FormData) => Promise<void>
} => {
  const { dispatch } = useNotifications()

  const [comment, setComment] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const addNotification = (notification: NotificationItem) => {
    dispatch({ type: ActionTypes.ADD_NOTIFICATION, payload: notification })
  }

  async function onSubmit(formData: FormData) {
    if (!formData.get('comment')) {
      addNotification({
        id: 'BLOG_FILL_MESSAGE',
        message: 'Please fill the message',
        type: 'ERROR',
      })
    } else {
      try {
        setIsLoading(true)
        await create(formData)
        setComment('')
        addNotification({
          id: 'BLOG_SUCCESS_MESSAGE',
          message: 'Thanks 👋 It will be a pleasure to contact you',
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
