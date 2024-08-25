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
