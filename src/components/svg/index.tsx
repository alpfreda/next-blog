export interface IconProps {
  name: string
  size?: number
}

const Icon = ({ name, size }: IconProps) => {
  const SpecificStory = require(`./${name}`).default
  return (
    <SpecificStory
      role='icon'
      size={size}
    />
  )
}

export default Icon
