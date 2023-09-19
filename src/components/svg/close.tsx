import { Icon } from '@/interfaces/icon.interface'

const Close: React.FC<Icon> = ({ size = 20 }) => (
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
        d='M 3 90 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 84 -84 c 1.172 -1.172 3.07 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 l -84 84 C 4.536 89.707 3.768 90 3 90 z'
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
        d='M 87 90 c -0.768 0 -1.535 -0.293 -2.121 -0.879 l -84 -84 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.171 -1.172 3.071 -1.172 4.242 0 l 84 84 c 1.172 1.171 1.172 3.071 0 4.242 C 88.535 89.707 87.768 90 87 90 z'
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

export default Close
