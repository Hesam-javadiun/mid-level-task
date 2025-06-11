import { type AxiosError } from "axios";

const responseInterceptor = function (error: AxiosError) {
  const statusCode = error.response?.status;
  console.log('error.response', error.response);
  console.log('error.request', error.request);
  
  if (statusCode === 401) {
    // unauthorized
  }

  if (statusCode === 403) {
    // forbidden
  }

  if (statusCode === 404) {
    // not found
  }
  if (statusCode === 500) {
    // internal server error
  }

  return Promise.reject(error);
};

export default responseInterceptor;
