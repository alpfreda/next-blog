'use client'

import Button from '../common/button'
import { usePostDetailForm } from './post-detail-form-hook'

const PostDetailForm: React.FC = (): JSX.Element => {
  const { isLoading, comment, setComment, onSubmit } = usePostDetailForm()

  return (
    <form
      id='blog-comments'
      className='blog-detail-form'
      action={onSubmit}>
      <div className='form-group'>
        <label className='form-label'>Write Comment</label>
        <textarea
          name='comment'
          maxLength={1000}
          value={comment}
          onChange={e => setComment(e.target.value)}
          className='form-control'
          placeholder='Write your comment....'
          rows={3}
        />
      </div>
      <Button
        onClick={onSubmit}
        isLoading={isLoading}>
        Submit
      </Button>
    </form>
  )
}

export default PostDetailForm
