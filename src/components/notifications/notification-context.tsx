'use client'

import { NotificationItem } from '@/interfaces/notification-item.interface'
import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react'

interface NotificationsState {
  notifications: NotificationItem[]
}

export enum ActionTypes {
  ADD_NOTIFICATION = 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
}

type Action = { type: ActionTypes.ADD_NOTIFICATION; payload: NotificationItem } | { type: ActionTypes.REMOVE_NOTIFICATION; payload: string }

const initialNotificationsState: NotificationsState = {
  notifications: [],
}

const notificationsReducer = (state: NotificationsState, action: Action): NotificationsState => {
  switch (action.type) {
    case ActionTypes.ADD_NOTIFICATION:
      const isExist = state.notifications.some(item => item.id === action.payload.id)
      return {
        ...state,
        notifications: isExist ? state.notifications : [...state.notifications, action.payload],
      }
    case ActionTypes.REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(notification => notification.id !== action.payload),
      }
    default:
      return state
  }
}

const NotificationsContext = createContext<
  | {
      state: NotificationsState
      dispatch: Dispatch<Action>
    }
  | undefined
>(undefined)

interface NotificationsProviderProps {
  children: ReactNode
}

export function NotificationsProvider({ children }: NotificationsProviderProps) {
  const [state, dispatch] = useReducer(notificationsReducer, initialNotificationsState)

  return <NotificationsContext.Provider value={{ state, dispatch }}>{children}</NotificationsContext.Provider>
}

export function useNotifications() {
  const context = useContext(NotificationsContext)
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationsProvider')
  }
  return context
}
