import { URLS } from '@/constants/consent'
import { NotificationItem } from '@/interfaces/notification-item.interface'
import { postReq } from '@/utils/next-axios'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useState } from 'react'
import { ActionTypes, useNotifications } from '../notifications/notification-context'

const useSetupForm = (): {
  message: string
  isLoading: boolean
  setMessage: Dispatch<SetStateAction<string>>
  onSubmit: () => {}
} => {
  const { dispatch } = useNotifications()
  const router = useRouter()
  const [message, setMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const addNotification = (notification: NotificationItem) => {
    dispatch({ type: ActionTypes.ADD_NOTIFICATION, payload: notification })
  }

  async function onSubmit() {
    setIsLoading(true)
    try {
      await postReq(URLS.SETUP)
      setMessage('')
      addNotification({
        id: 'SETUP_SUCCESS_MESSAGE',
        message: 'Setup has completed successfully 👋',
        type: 'SUCCESS',
      })
      router.push('/')
    } catch (e) {
      addNotification({
        id: 'SETUP_SERVER_ERROR',
        message: e instanceof Error ? e.message : 'Unexpected alert happened!',
        type: 'ERROR',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return { message, isLoading, setMessage, onSubmit }
}

export { useSetupForm }
