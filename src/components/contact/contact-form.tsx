'use client'

import { useContactForm } from './contact-form-hook'

const ContactForm: React.FC = (): JSX.Element => {
  const { isLoading, message, setMessage, onSubmit } = useContactForm()

  return (
    <form
      className='contact-form'
      action={onSubmit}>
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
      <button
        disabled={isLoading}
        className='btn'>
        Submit
      </button>
    </form>
  )
}

export default ContactForm
