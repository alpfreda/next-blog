'use server'

import { URLS } from '@/constants/consent'
import axios from 'axios'

export async function addLike(postId: string) {
  try {
    const { data } = await axios.post(`${process.env.API_URL}/${URLS.BLOG_LIKE}`, { postId })
    return data
  } catch (e) {
    throw e
  }
}

export async function addComment(formData: FormData) {
  try {
    const { data } = await axios.post(`${process.env.API_URL}/${URLS.BLOG_COMMENT}`, { message: formData.get('message') })
    return data
  } catch (e) {
    throw e
  }
}
