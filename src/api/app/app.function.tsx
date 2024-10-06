import { ICheckoutBody } from '@/interfaces';

import { APP_ENDPOINTS } from './app.endpoint';
import { AxiosService } from '../axiosService';

export const appAPI = {
  customerList: (
    page: number,
    limit: number,
    search?: string,
    all?: boolean
  ) => {
    let url = `${APP_ENDPOINTS.CUSTOMER}?page=${page}&limit=${limit}`;

    if (search) {
      url += `&search=${search}`;
    }

    if (all) {
      url += `&all=true`;
    }

    return AxiosService.get(url);
  },

  createCustomer: (body: any) => {
    return AxiosService.post(APP_ENDPOINTS.CREATE_CUSTOMER, body);
  },

  plan: () => {
    return AxiosService.get(APP_ENDPOINTS.PLAN);
  },

  getUserProfile: () => {
    return AxiosService.get(APP_ENDPOINTS.PROFILE);
  },

  editUserProfile: (body: any) => {
    return AxiosService.put(APP_ENDPOINTS.PROFILE, body);
  },

  changePassword: (body: any) => {
    return AxiosService.post(APP_ENDPOINTS.CHANGE_PASSWORD, body);
  },

  getPaymentHistory: (year: number) => {
    return AxiosService.get(`${APP_ENDPOINTS.PAYMENT_HISTORY}/${year}`);
  },

  getInvoiceHistory: (year: number) => {
    return AxiosService.get(`${APP_ENDPOINTS.INVOICE_HISTORY}/${year}`);
  },

  getCustomerSubscription: () => {
    return AxiosService.get(APP_ENDPOINTS.CUSTOMER_SUBSCRIPTION);
  },

  getSubscriptionDetails: (id: string) => {
    return AxiosService.get(`${APP_ENDPOINTS.SUBSCRIPTION_DETAILS}/${id}`);
  },

  cancelSubscription: (id: string) => {
    return AxiosService.put(`${APP_ENDPOINTS.SUBSCRIPTION_DETAILS}/${id}`);
  },

  checkoutSessions: (body: ICheckoutBody) => {
    return AxiosService.post(APP_ENDPOINTS.CHECKOUT_SESSION, body);
  },
};
