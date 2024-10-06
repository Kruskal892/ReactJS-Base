import { AxiosError } from 'axios';

export type TError = {
  success: boolean;
  statusCode?: number;
  code?: number;
  message: string;
  errors:
    | string
    | {
        data: string;
      };
};

export type TAppError = AxiosError<TError>;

export interface IAppResponse<T> {
  data?: T;
  success: boolean;
  code: number;
  message?: string;
  title?: string;
}
