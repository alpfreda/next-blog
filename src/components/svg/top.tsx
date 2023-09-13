import { Icon } from '@/interfaces/icon.interface'

const TestingLibrary: React.FC<Icon> = ({ size = 20 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    version='1.1'
    width={size}
    height={size}
    viewBox='0 0 256 256'
    xmlSpace='preserve'
    style={{ transform: 'rotate(270deg)' }}>
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
      <linearGradient
        id='SVGID_2'
        gradientUnits='userSpaceOnUse'
        x1='34.5269'
        y1='33.94'
        x2='62.7893'
        y2='54.8751'>
        <stop
          offset='0%'
          style={{ stopColor: 'rgb(78,216,223)', stopOpacity: 1 }}
        />
        <stop
          offset='99.51%'
          style={{ stopColor: 'rgb(13,121,142)', stopOpacity: 1 }}
        />
      </linearGradient>
      <path
        d='M 86.328 38.568 L 51.526 3.767 c -2.526 -2.526 -6.62 -2.526 -9.146 0 l -4.187 4.187 c -2.526 2.526 -2.526 6.62 0 9.146 l 18.472 18.472 h -0.981 H 20.502 H 6.467 C 2.895 35.572 0 38.467 0 42.039 v 5.922 c 0 3.572 2.895 6.467 6.467 6.467 h 14.035 h 25.422 h 31.03 V 45 h 6.71 C 87.021 45 88.702 40.942 86.328 38.568 z'
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'url(#SVGID_2)',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform=' matrix(1 0 0 1 0 0) '
        strokeLinecap='round'
      />
      <linearGradient
        id='SVGID_3'
        gradientUnits='userSpaceOnUse'
        x1='73.4354'
        y1='39.2442'
        x2='38.3172'
        y2='73.1749'>
        <stop
          offset='0%'
          style={{ stopColor: 'rgb(78,216,223)', stopOpacity: 1 }}
        />
        <stop
          offset='99.51%'
          style={{ stopColor: 'rgb(13,121,142)', stopOpacity: 1 }}
        />
      </linearGradient>
      <path
        d='M 88.049 49.711 L 51.526 86.233 c -2.526 2.526 -6.62 2.526 -9.146 0 l -4.187 -4.187 c -2.526 -2.526 -2.526 -6.62 0 -9.146 l 27.9 -27.9 c 5.593 -5.593 9.622 -17.044 1.11 -25.557 l 20.845 20.845 C 90.65 42.891 90.65 47.109 88.049 49.711 z'
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fill: 'url(#SVGID_3)',
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform=' matrix(1 0 0 1 0 0) '
        strokeLinecap='round'
      />
    </g>
  </svg>
)

export default TestingLibrary
