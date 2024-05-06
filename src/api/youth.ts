import axios from './axios'

export const getYouth = (apiUrl: any) => {
  return axios.get(apiUrl)
}