import Icon from '../svg'

const Footer: React.FC = () => {
  return (
    <footer>
      Made with <Icon name='heart' /> You can get it for free
      <a
        target='_blank'
        href='https://github.com/alpfreda/next-blog'>
        <Icon name='github' />
      </a>
    </footer>
  )
}

export default Footer