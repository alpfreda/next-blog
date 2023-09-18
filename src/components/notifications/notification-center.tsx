'use client'
import Icon from '../svg'
import { ActionTypes, useNotifications } from './notification-context'

const NotificationCenter: React.FC = () => {
  const { state, dispatch } = useNotifications()

  const handleRemoveNotification = (id: string) => {
    dispatch({ type: ActionTypes.REMOVE_NOTIFICATION, payload: id })
  }

  return (
    <section className='notification-center'>
      {state.notifications.map(notification => (
        <div
          className='notification-item'
          key={notification.id}>
          <div className={['notification-item-header', notification.type.toLocaleLowerCase()].join(' ')}>
            <span>Message</span>
            <span
              className='notification-item-icon'
              style={{
                animationName: 'noti',
                animationDuration: `10s`,
              }}
              onAnimationEnd={() => {
                handleRemoveNotification(notification.id)
              }}
              onClick={() => handleRemoveNotification(notification.id)}>
              <Icon
                name='close'
                size={15}
              />
            </span>
          </div>
          <div className='notification-item-content'>
            <div className='notification-item-message'>{notification.message}</div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default NotificationCenter
