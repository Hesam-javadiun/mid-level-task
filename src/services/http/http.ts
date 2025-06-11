import axios from "axios";
import requestInterceptor from "./request-interceptor";
import responseErrorInterceptor from "./response-error-interceptor";

const http = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    ["Content-Type"]: "application/json",
  },
});

http.interceptors.request.use(requestInterceptor);
http.interceptors.response.use((response) => response, responseErrorInterceptor);

export default http;
