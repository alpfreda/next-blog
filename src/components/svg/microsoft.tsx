import { Icon } from '@/interfaces/icon.interface'

const Microsoft: React.FC<Icon> = ({ size = 20 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 448 512'
    fill='#592c8c'
    role='img'
    width={size}
    height={size}>
    <path d='M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z' />
  </svg>
)

export default Microsoft
