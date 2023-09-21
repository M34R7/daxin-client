//Import components
import axios from 'axios'

//Configuration for requests
export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=UTF-8',
}
export const url = 'http://api.daxin.md/api/'

export const request = axios.create({
  baseURL: url,
  headers: headers,
})
