export interface Alert {
  message: string
  type: 'DANGER' | 'SUCCESS'
  icon?: string
}