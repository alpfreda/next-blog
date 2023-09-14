import ContactForm from '@/components/contact/contact-form'
import ContactInfo from '@/components/contact/contact-info'
import HeaderTitle from '@/components/header-title'
import { URLS } from '@/constants/urls'
import { MetaTag } from '@/interfaces/meta-tag.interface'
import axios from 'axios'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const metaTagResponse = await axios.get<MetaTag>(`${process.env.API_URL}/${URLS.META_TAGS}/contact`)

  return {
    title: metaTagResponse.data.title,
    description: metaTagResponse.data.description,
    keywords: metaTagResponse.data.keywords,
  }
}

const Contact: React.FC = async () => {
  const contactInfoResponse = await axios.get<ContactInfo>(`${process.env.API_URL}/${URLS.CONTACT_INFO}`)
  const contactInfo = contactInfoResponse.data

  return (
    <section className='contact'>
      <HeaderTitle title='Get in touch' />
      <h3 className='header-sub-title'>I love to talk with you</h3>
      <div className='contact-inner'>
        <ContactInfo contactInfo={contactInfo} />
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact