import { Icon } from '@/interfaces/icon.interface'

const Webpack: React.FC<Icon> = ({ size = 20 }) => (
  <svg
    viewBox='0 0 600 600'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}>
    <path
      d='M300 .1 565 150v299.9L300 599.8 35 449.9V150z'
      fill='#fff'
    />
    <path
      d='M517.7 439.5 308.8 557.8v-92L439 394.1zm14.3-12.9V179.4l-76.4 44.1v159zM81.5 439.5l208.9 118.2v-92l-130.2-71.6zm-14.3-12.9V179.4l76.4 44.1v159zm8.9-263.2L290.4 42.2v89l-137.3 75.5-1.1.6zm446.9 0L308.8 42.2v89L446 206.8l1.1.6z'
      fill='#8ed6fb'
    />
    <path
      d='M290.4 444.8 162 374.1V234.2l128.4 74.1zm18.4 0 128.4-70.6v-140l-128.4 74.1zM170.6 218l129-70.9L428.5 218l-128.9 74.4z'
      fill='#1c78c0'
    />
  </svg>
)

export default Webpack
