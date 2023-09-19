import HeaderTitle from '@/components/common/header-title'
import PortfolioList from '@/components/portfolio/portfolios-list'
import { META_TAGS, URLS } from '@/constants/consent'
import { MetaTag } from '@/interfaces/meta-tag.interface'
import { Portfolio } from '@/interfaces/portfolio.interface'
import axios from 'axios'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const metaTagResponse = await axios.get<MetaTag>(`${process.env.API_URL}/${URLS.META_TAGS}/${META_TAGS.PORTFOLIO}`)

  return {
    title: metaTagResponse.data.title,
    description: metaTagResponse.data.description,
    keywords: metaTagResponse.data.keywords,
  }
}

const Portfolio: React.FC = async () => {
  const portfolioResponse = await axios.get<Portfolio[]>(`${process.env.API_URL}/${URLS.PORTFOLIO}`)
  const portfolio: Portfolio[] = portfolioResponse.data.sort((a, b) => a.order - b.order)

  return (
    <section className='portfolio'>
      <HeaderTitle title='Portfolio' />
      <h3 className='header-sub-title'>Check out my pets projects</h3>
      <PortfolioList items={portfolio} />
    </section>
  )
}

export default Portfolio
