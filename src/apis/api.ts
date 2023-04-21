import axios from "axios";

const request = axios.create({
  timeout: 50000,
  
})

// Req
request.interceptors.request.use(
  config => {
    // Base
    config.baseURL = import.meta.env.VITE_BASE;
    // TODO: Token
    return config;
  },
  error => {
    console.log(`error: ${error}`);
    return Promise.reject(error);
  }
)

// Res
request.interceptors.response.use(
  response => {
    if(response.status != 200)
      return Promise.reject(`${response.status}:${response.statusText}`);
    return response;
  },
  error => {
    console.log(`Error: ${error}`);
    return Promise.reject('网络连接异常,请稍后再试!');
  }
)

export default request;