'use client'
import Icon from '@/components/svg';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <section className='error-page'>
      <Icon
        name='error'
        size={100}
      />
      <h2 className='title'>Ooups, an unexpected error</h2>
      <p className='description'>I am very sorry for the inconvenience, It seems an unexpected error has occurred.</p>
      <button
        className='btn'
        onClick={reset}>
        Try again
      </button>
    </section>
  )
}
