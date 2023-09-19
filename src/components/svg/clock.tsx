import { Icon } from '@/interfaces/icon.interface'

const Comment: React.FC<Icon> = ({ size = 20 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    version='1.1'
    role='img'
    width={size}
    height={size}
    viewBox='0 0 256 256'
    xmlSpace='preserve'>
    <defs></defs>
    <g
      style={{
        stroke: 'none',
        strokeWidth: 0,
        strokeDasharray: 'none',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 10,
        fill: 'none',
        fillRule: 'nonzero',
        opacity: 1,
      }}
      transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'>
      <path
        d='M 64.908 65.566 c -0.489 0 -0.979 -0.178 -1.364 -0.537 L 43.636 46.463 C 43.23 46.084 43 45.555 43 45 V 17.778 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 V 44.13 l 19.272 17.973 c 0.808 0.754 0.852 2.02 0.099 2.827 C 65.977 65.353 65.443 65.566 64.908 65.566 z'
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'rgb(0,0,0)',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform=' matrix(1 0 0 1 0 0) '
        strokeLinecap='round'
      />
      <path
        d='M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z M 45 4 C 22.393 4 4 22.393 4 45 s 18.393 41 41 41 s 41 -18.393 41 -41 S 67.607 4 45 4 z'
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'rgb(0,0,0)',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform=' matrix(1 0 0 1 0 0) '
        strokeLinecap='round'
      />
    </g>
  </svg>
)

export default Comment
