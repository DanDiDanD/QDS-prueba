import { API_BASE } from '../constants/defaultValues'
import { type Params } from '../types/props'
import qs from 'qs'

const makeUrl = (endpoint: string): string => API_BASE + endpoint

const fe = {
  get: async (url: string, params: Params = undefined) => {
    let newURl = makeUrl(url)
    if (params) newURl += '?' + qs.stringify(params)
    const res = await fetch(newURl)
    const data = await res.json()
    return data
  }
}

export { fe }
