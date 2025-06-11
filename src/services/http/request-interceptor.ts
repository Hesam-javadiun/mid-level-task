import { type AxiosRequestConfig, type InternalAxiosRequestConfig } from "axios";
import storage from "../storage";

export default function requestInterceptor(
  config: AxiosRequestConfig<unknown>
) : InternalAxiosRequestConfig<unknown>{
  console.log("request config =>", config);

  if (isThereAnyHeaders(config)) {
    config.headers  = {};
  }

  if (isThereAToken()) {
    const { token } = storage.authTokens.get();
    config.headers!.Authorization = `Bearer ${token}`;
  }

  return config;
}

function isThereAnyHeaders( config : AxiosRequestConfig<unknown>) {
  return !('headers' in config);
}


function isThereAToken(){
  return !!storage.authTokens.get()?.token;
}


