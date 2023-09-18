//Import components
import axios from 'axios'

//Configuration for requests
export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=UTF-8',
}
export const url = 'http://localhost:3001/api/'

export const request = axios.create({
  baseURL: url,
  headers: headers,
})
