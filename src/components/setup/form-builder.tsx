'use client'

import Button from '../common/button'
import HeaderTitle from '../common/header-title'
import Icon from '../svg'
import { useSetupForm } from './setup-form-hook'

const SetupForm: React.FC = (): JSX.Element => {
  const { isLoading, onSubmit } = useSetupForm()

  return (
    <form
      role='form'
      className='contact-form'
      action={onSubmit}>
      <Icon
        name='robot'
        size={150}
      />
      <HeaderTitle title='Install next blog' />
      <p className='description'>
        In order to get started, we must create tables on the Firebase. Please click on the <strong>Setup</strong> button below. Then you can update your database directly
        from Firebase!
      </p>
      <Button
        onClick={onSubmit}
        isLoading={isLoading}>
        Submit
      </Button>
    </form>
  )
}

export default SetupForm
