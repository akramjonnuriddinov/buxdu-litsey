import axios from './axios'

export const getNews = (apiUrl: any) => {
  return axios.get(apiUrl)
}