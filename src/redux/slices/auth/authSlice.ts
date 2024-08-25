import { RootState } from '@/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  accessToken?: string;
  refreshToken?: string;
  tokenExpiredAt?: string;
  accountInfo?: any;
  // resendSignUpCountdown?: Dayjs;
  // resendForgotCountdown?: Dayjs;
  // registeredUserInfo?: IRegisteredUserInfo | null;
  forgotUserInfo?: any | null;
}

const initialState: IAuthState = {
  accessToken: undefined,
  refreshToken: undefined,
  tokenExpiredAt: undefined,
  accountInfo: undefined,
  // registeredUserInfo: undefined,
  // resendSignUpCountdown: undefined,
  // resendForgotCountdown: undefined,
  forgotUserInfo: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<any>) => {
      const payload = action.payload;
      state.accessToken = payload.access_token;
      state.refreshToken = payload.refresh_token;
      state.tokenExpiredAt = payload.expires_at;
    },
    setAccessToken: (state, action) => {
      const payload = action.payload;
      state.accessToken = payload.accessToken;
    },
    setRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    setTokenExpiredAt: (state, action) => {
      state.tokenExpiredAt = action.payload;
    },
    setAccountInfo: (state, action) => {
      state.accountInfo = action.payload;
    },
    setForgotUserInfo: (state, action: PayloadAction<any | null>) => {
      state.forgotUserInfo = action.payload;
    },
    resetAuthState: state => {
      state = initialState;
    },
    logout: state => {
      state.accessToken = undefined;
      state.refreshToken = undefined;
      state.tokenExpiredAt = undefined;
      state.accountInfo = undefined;
      // state.registeredUserInfo = undefined;
      // state.accountRoles = undefined;
      // state.appSelectedRole = undefined;
    },
    logoutAccount: () => {
      return initialState;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const {
  setUserAuth,
  // setRegisteredUserInfo,
  setForgotUserInfo,
  // setResendSignUpCountdown,
  // setResendForgotCountdown,
  // setResend2FACountdown,
  logout,
  logoutAccount,
} = authSlice.actions;

export default authSlice.reducer;
