import axios from 'axios'

export async function getData<T>(url: string): Promise<T> {
  try {
    const res = await axios.get<T>(`${process.env.API_URL}/${url}`)
    return res.data
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}
