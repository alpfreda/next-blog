'use client'

import Button from '../common/button'
import { useContactForm } from './contact-form-hook'

const ContactForm: React.FC = (): JSX.Element => {
  const { isLoading, message, setMessage, onSubmit } = useContactForm()

  return (
    <div
      role='form'
      className='contact-form'>
      <div className='form-group'>
        <label className='form-label'>Send Message</label>
        <textarea
          name='message'
          value={message}
          maxLength={1000}
          onChange={e => setMessage(e.target.value)}
          className='form-control'
          placeholder='Write your message....'
          rows={3}
        />
      </div>
      <Button
        onClick={onSubmit}
        isLoading={isLoading}>
        Submit
      </Button>
    </div>
  )
}

export default ContactForm
