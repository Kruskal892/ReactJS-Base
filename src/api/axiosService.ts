import { AxiosRequestConfig } from 'axios';

import { IAppResponse } from '@/interfaces';

import { ApiClient } from './axiosInstance';

export const AxiosService = {
  post: async <TResponse = any, TRequest = any>(
    url: string,
    body?: TRequest,
    config?: AxiosRequestConfig<TRequest>
  ): Promise<IAppResponse<TResponse>> => {
    return await ApiClient.post(url, body, config);
  },
  put: async <TResponse = any, TRequest = any>(
    url: string,
    body?: TRequest,
    config?: AxiosRequestConfig<TRequest>
  ): Promise<IAppResponse<TResponse>> => {
    return await ApiClient.put(url, body, config);
  },
  patch: async <TResponse, TRequest = any>(
    url: string,
    body?: TRequest,
    config?: AxiosRequestConfig<TRequest>
  ): Promise<IAppResponse<TResponse>> => {
    return await ApiClient.patch(url, body, config);
  },
  delete: async <TResponse = any, TRequest = any>(
    url: string,
    config?: AxiosRequestConfig<TRequest>
  ): Promise<IAppResponse<TResponse>> => {
    return await ApiClient.delete(url, config);
  },
  get: async <TResponse = any, TRequest = any>(
    url: string,
    config?: AxiosRequestConfig<TRequest>
  ): Promise<IAppResponse<TResponse>> => {
    return await ApiClient.get(url, config);
  },
  request: async <TResponse = any, TRequest = any>(
    url: string,
    config?: AxiosRequestConfig<TRequest>
  ): Promise<IAppResponse<TResponse>> => {
    return await ApiClient.request({
      url,
      ...config,
    });
  },
};
