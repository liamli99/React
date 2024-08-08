import axios from 'axios';

const authFetch = axios.create({
  // baseURL will be prepended to url unless url is absolute!
  baseURL: 'https://www.course-api.com',
  headers: {
    Authorization: 'Bearer 123'
  }
})

export default authFetch;