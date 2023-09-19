interface GithubProps {
  size?: number
}

const Github: React.FC<GithubProps> = ({ size = 20 }) => (
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
        d='M 45 0 C 20.147 0 0 20.467 0 45.714 C 0 67.034 14.367 84.944 33.802 90 c -0.013 -5.283 -0.03 -11.763 -0.04 -13.782 c -12.986 2.869 -15.726 -5.595 -15.726 -5.595 c -2.123 -5.481 -5.183 -6.939 -5.183 -6.939 c -4.236 -2.943 0.319 -2.883 0.319 -2.883 c 4.687 0.334 7.156 4.887 7.156 4.887 c 4.163 7.249 10.92 5.153 13.584 3.942 c 0.419 -3.064 1.628 -5.157 2.964 -6.341 c -10.368 -1.199 -21.268 -5.265 -21.268 -23.435 c 0 -5.177 1.824 -9.407 4.81 -12.728 c -0.485 -1.195 -2.083 -6.018 0.452 -12.55 c 0 0 3.92 -1.274 12.84 4.861 c 3.724 -1.051 7.717 -1.578 11.684 -1.596 c 3.967 0.018 7.963 0.545 11.694 1.596 c 8.91 -6.135 12.824 -4.861 12.824 -4.861 c 2.541 6.532 0.943 11.355 0.458 12.55 c 2.993 3.321 4.804 7.551 4.804 12.728 c 0 18.214 -10.92 22.223 -21.315 23.398 c 1.674 1.472 3.166 4.357 3.166 8.781 c 0 3.513 -0.016 11.601 -0.031 17.74 C 76.021 84.439 90 66.74 90 45.714 C 90 20.467 69.853 0 45 0 z'
        style={{
          stroke: 'none',
          strokeWidth: 1,
          strokeDasharray: 'none',
          strokeLinecap: 'butt',
          strokeLinejoin: 'miter',
          strokeMiterlimit: 10,
          fillRule: 'nonzero',
          opacity: 1,
        }}
        transform=' matrix(1 0 0 1 0 0) '
        strokeLinecap='round'
      />
    </g>
  </svg>
)

export default Github
