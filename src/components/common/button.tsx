import { ReactNode } from 'react'
import MiniLoading from './mini-loading'

interface ButtonProps {
  children: ReactNode
  isLoading: boolean
  onClick?: () => {}
}

const Button: React.FC<ButtonProps> = ({ children, isLoading, onClick }) => (
  <button
    onClick={onClick}
    disabled={isLoading}
    className='btn'>
    {isLoading ? <MiniLoading /> : children}
  </button>
)

export default Button
