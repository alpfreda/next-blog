import HeaderTitle from '@/components/common/header-title'
import PortfolioList from '@/components/portfolio/portfolios-list'
import { META_TAGS, URLS } from '@/constants/consent'
import { MetaTag } from '@/interfaces/meta-tag.interface'
import { Portfolio } from '@/interfaces/portfolio.interface'
import { getReq } from '@/utils/next-axios'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const metaTag = await getReq<MetaTag>(`${URLS.META_TAGS}/${META_TAGS.PORTFOLIO}`)

  return {
    title: metaTag.title,
    description: metaTag.description,
    keywords: metaTag.keywords,
  }
}

const Portfolio: React.FC = async () => {
  const portfolios = await getReq<Portfolio[]>(URLS.PORTFOLIO)

  const sortedPortfolios = portfolios.sort((a, b) => a.order - b.order)

  return (
    <section className='portfolio'>
      <HeaderTitle title='Portfolio' />
      <h3 className='header-sub-title'>Check out my pets projects</h3>
      <PortfolioList items={sortedPortfolios} />
    </section>
  )
}

export default Portfolio
