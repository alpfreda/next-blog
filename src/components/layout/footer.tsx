import Github from '../svg/github'
import Heart from '../svg/heart'

const Footer: React.FC = () => {
  return (
    <footer>
      Made with <Heart /> You can get it for free
      <a target='_blank' href='https://github.com/alpfreda/next-blog'>
        <Github />
      </a>
    </footer>
  )
}

export default Footer
