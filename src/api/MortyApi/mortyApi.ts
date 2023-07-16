import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
const axiosParams = {
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/',
}

const axiosInstance = axios.create(axiosParams)

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(
      url: string,
      url2: string,
      url3: string,
      url4: string,
      config: AxiosRequestConfig = {}
    ) =>
      Promise.all([
        axios.get<T>(url, config),
        axios.get<T>(url2, config),
        axios.get<T>(url3, config),
        axios.get<T>(url4, config),
      ]),
  }
}
export default api(axiosInstance)
