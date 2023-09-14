'use server'

import { URLS } from '@/constants/urls'
import axios from 'axios'

export async function create(formData: FormData) {
  try {
    const { data } = await axios.post(`${process.env.API_URL}/${URLS.CONTACT_ME}`, { message: formData.get('message') })
    return data
  } catch (e) {
    throw e
  }
}