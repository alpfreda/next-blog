import { Icon } from '@/interfaces/icon.interface'

const Vuex: React.FC<Icon> = ({ size = 20 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 261.76 226.69'
    role='img'
    width={size}
    height={size}>
    <path
      fill='#41b883'
      d='m161.096.001-30.224 52.35L100.647.002H-.005L130.872 226.69 261.749 0z'
    />
    <path
      fill='#34495e'
      d='m161.096.001-30.224 52.35L100.647.002H52.346l78.526 136.01L209.398.001z'
    />
  </svg>
)

export default Vuex
