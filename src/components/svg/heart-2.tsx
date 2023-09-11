import { Icon } from '@/interfaces/icon.interface'

const Heart2: React.FC<Icon> = ({ size = 20 }) => (
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
        d='M 45 87.273 L 45 87.273 c -0.849 0 -1.605 -0.536 -1.887 -1.337 c -3.033 -8.631 -10.638 -13.596 -18.69 -18.853 C 12.976 59.61 0 51.14 0 30.374 C 0 15.129 12.197 2.727 27.189 2.727 c 6.616 0 12.869 2.385 17.811 6.756 c 4.943 -4.371 11.196 -6.756 17.812 -6.756 C 77.804 2.727 90 15.129 90 30.374 c 0 20.766 -12.976 29.236 -24.423 36.71 c -8.053 5.257 -15.658 10.222 -18.69 18.853 C 46.605 86.737 45.849 87.273 45 87.273 z M 27.189 6.727 C 14.402 6.727 4 17.335 4 30.374 c 0 18.601 10.982 25.771 22.61 33.361 c 7.02 4.582 14.244 9.299 18.39 16.7 c 4.146 -7.401 11.37 -12.117 18.39 -16.7 C 75.018 56.145 86 48.975 86 30.374 C 86 17.335 75.598 6.727 62.812 6.727 c -6.188 0 -12.006 2.455 -16.385 6.914 c -0.376 0.383 -0.89 0.599 -1.427 0.599 l 0 0 c -0.537 0 -1.051 -0.216 -1.427 -0.599 C 39.195 9.182 33.376 6.727 27.189 6.727 z'
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

export default Heart2
