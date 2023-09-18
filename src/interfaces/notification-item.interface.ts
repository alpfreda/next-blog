export interface NotificationItem {
  id: string
  message: string
  type: 'ERROR' | 'SUCCESS'
  icon?: string
}
