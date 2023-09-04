import { Icon } from '@/interfaces/icon.interface'

const Css3: React.FC<Icon> = ({ size = 20 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 512 512'
    fill='#2449d8'
    width={size}
    height={size}>
    <path d='m480 32-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z' />
  </svg>
)

export default Css3
