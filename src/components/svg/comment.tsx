import { Icon } from '@/interfaces/icon.interface'

const Comment: React.FC<Icon> = ({ size = 20 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    version='1.1'
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
        d='M 88 90 c -0.245 0 -0.492 -0.045 -0.729 -0.138 l -17.928 -7.012 C 62.082 87.531 53.688 90 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 c 0 8.688 -2.469 17.082 -7.149 24.344 l 7.012 17.928 c 0.29 0.74 0.113 1.581 -0.448 2.143 C 89.032 89.797 88.521 90 88 90 z M 45 4 C 22.393 4 4 22.393 4 45 s 18.393 41 41 41 c 8.24 0 16.188 -2.437 22.984 -7.045 c 0.545 -0.369 1.238 -0.448 1.851 -0.207 l 14.638 5.725 l -5.725 -14.638 c -0.24 -0.613 -0.163 -1.306 0.207 -1.851 C 83.563 61.188 86 53.24 86 45 C 86 22.393 67.607 4 45 4 z'
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
