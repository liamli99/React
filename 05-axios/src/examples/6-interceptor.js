import axios from 'axios';

const authFetch = axios.create({
  baseURL: 'https://www.course-api.com',
})

authFetch.interceptors.request.use((config) => {
  // Executed before request is sent
  config.headers['Authorization'] = 'Bear 123';
  console.log('Request will be sent');
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

authFetch.interceptors.response.use((response) => {
  // Executed when 200 <= status code < 300 before response is received
  console.log('Response will be received');
  console.log(response.data);
  
  return response;
}, (error) => {
  // Executed when status code is outside the range of 2xx before response is received
  if (error.response.status === 404) {
    console.log('Not Found');
  }

  return Promise.reject(error);
})

export default authFetch;