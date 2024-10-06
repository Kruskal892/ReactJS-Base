import { ACCESS_TOKEN } from '@/config/constants';
import { queryClient } from '@/config/queryClient';
import { TAppError } from '@/interfaces';
import { setGlobalLoading, store } from '@/redux';
import { isAxiosError } from '@/utils';
import axios from 'axios';
import queryString from 'query-string';
import { toast } from 'react-toastify';

const axiosClient = (baseURL?: string) => {
  const instance = axios.create({
    baseURL: baseURL || import.meta.env.VITE_API_URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
  });

  instance.interceptors.request.use(
    async function (config) {
      const auth = store.getState()?.auth;
      // const app = store.getState()?.app;
      const storeToken =
        auth?.accessToken || sessionStorage.getItem(ACCESS_TOKEN);
      if (storeToken) {
        console.log('storeToken:', storeToken);
        // LogApp('interceptors token', storeToken);
        config.headers.Authorization = `${storeToken}`;
      }
      config.headers['Accept-Language'] = ['en, cn, zh-hk'];
      // config.headers.locale = language;
      return { ...config };
    },
    function (error) {
      // Do something with request error
      // LogApp('interceptors request error', error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    response => {
      if (response && response?.data) {
        return response.data;
      }
      return response;
    },
    async function (error) {
      // LogApp('interceptors response error', error);
      if (isAxiosError<TAppError>(error)) {
        const checkUnAuthorized =
          error?.response?.status === 401 ||
          error?.response?.data?.status === 401 ||
          error?.response?.data?.response?.status === 401 ||
          error?.response?.data?.response?.data?.statusCode === 401;

        if (checkUnAuthorized) {
          handleSessionExpire();
          return;
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

const handleSessionExpire = (): void => {
  const auth = store.getState()?.auth;
  const storeToken = auth?.accessToken;
  if (storeToken) {
    // LogApp('execute log out...');
    toast.error('Session expired', {
      position: 'top-right',
      autoClose: 3000,
      closeOnClick: true,
      pauseOnHover: true,
      theme: 'light',
      toastId: Math.random(),
      style: {
        padding: '10px',
        fontSize: '12px',
      },
    });
    // store.dispatch(logoutAccount());
    store.dispatch(setGlobalLoading(false));
    queryClient.clear();
    localStorage.clear();
    sessionStorage.clear();
    // setTimeout(() => {
    //   isAccessTokenExpiredFlag = false;
    // }, EXPIRE_SESSION_TIMEOUT);
  }
};

export const ApiClient = axiosClient();
