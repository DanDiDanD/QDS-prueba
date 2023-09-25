import { API_BASE } from '../constants/defaultValues'

const fe = {
  get: async (url: string) => {
    const res = await fetch(`${API_BASE}${url}`)
    const data = await res.json()
    return data
  }
}

export { fe }
