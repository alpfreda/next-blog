import HeaderTitle from '@/components/common/header-title'
import ContactForm from '@/components/contact/contact-form'
import ContactInfo from '@/components/contact/contact-info'
import { META_TAGS, URLS } from '@/constants/consent'
import { MetaTag } from '@/interfaces/meta-tag.interface'
import { getReq } from '@/utils/next-axios'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const metaTag = await getReq<MetaTag>(`${URLS.META_TAGS}/${META_TAGS.CONTACT}`)

  return {
    title: metaTag.title,
    description: metaTag.description,
    keywords: metaTag.keywords,
  }
}

const Contact: React.FC = async () => {
  const contactInfo = await getReq<ContactInfo>(URLS.CONTACT_INFO)

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
