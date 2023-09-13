'use client'

import { Lato } from 'next/font/google'
import { useContactForm } from './contact-form-hook'
const lato = Lato({ subsets: ['latin'], weight: ['100', '300', '400', '700', '900'] })

const ContactForm: React.FC = (): JSX.Element => {
  const { isLoading, alert, message, setMessage, onSubmit } = useContactForm()

  return (
    <form
      className='contact-form'
      action={onSubmit}>
      <div className='form-group'>
        <label className='form-label'>Send Message</label>
        <textarea
          name='message'
          value={message}
          onChange={e => setMessage(e.target.value)}
          className={['form-control', lato.className].join(' ')}
          placeholder='Write your message....'
          rows={3}
        />
      </div>
      <button
        disabled={isLoading}
        className='btn'>
        Submit
      </button>
    </form>
  )
}

export default ContactForm
