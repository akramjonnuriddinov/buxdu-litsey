import axios from './axios'

export const getStructure = (apiUrl: any) => {
  return axios.get(apiUrl)
}