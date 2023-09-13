'use client'

import { ContactInfo } from '@/interfaces/contact-info.interface'
import Icon from '../svg'

interface ContactInfoProps {
  contactInfo: ContactInfo
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contactInfo }): JSX.Element => {
  return (
    <div className='contact-info'>
      <div className='contact-info-item'>
        <Icon
          name='github'
          size={40}
        />
        <span>Github</span>
        <a
          href={contactInfo?.github.link}
          target='blank'
          className='contact-info-item-link'>
          {contactInfo?.github.title}
        </a>
      </div>
      <div className='contact-info-item'>
        <Icon
          name='linkedin'
          size={40}
        />
        <span>Linkedin</span>
        <a
          href={contactInfo?.linkedin.link}
          target='blank'
          className='contact-info-item-link'>
          {contactInfo?.linkedin.title}
        </a>
      </div>
      <div className='contact-info-item'>
        <Icon
          name='email'
          size={40}
        />
        <span>Email</span>
        <a
          href={contactInfo?.email.link}
          target='blank'
          className='contact-info-item-link'>
          {contactInfo?.email.title}
        </a>
      </div>
    </div>
  )
}

export default ContactInfo