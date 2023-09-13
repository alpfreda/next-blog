interface HeaderTitleProps {
  title: string
}
const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => (
  <h3 className='header-title'>
    <span>{title}</span>
  </h3>
)

export default HeaderTitle
