export interface IconProps {
  name: string
  size?: number
}

const Icon = ({ name, size }: IconProps) => {
  let SpecificStory

  try {
    SpecificStory = require(`./${name}`).default
  } catch (error) {
    console.error(`Error loading icon component "${name}":`, error)
    return null
  }

  return (
    <SpecificStory
      role='icon'
      size={size}
    />
  )
}

export default Icon
