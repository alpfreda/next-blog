import axios from 'axios'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export async function getReq<T>(url: string): Promise<T> {
  console.log('why work',baseUrl)
  try {
    const res = await axios.get<T>(`${baseUrl}/${url}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

export async function postReq(url: string, data?: any): Promise<any> {
  try {
    const res = await axios.post(`${baseUrl}/${url}`, data)
    return res.data
  } catch (error) {
    throw new Error('Failed to post data')
  }
}
