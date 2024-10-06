import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

// import { LIGHT_THEME, appLanguageEnum, roleEnum } from '@/config';
// import { AppThemeType } from '@/interfaces';

import { type RootState } from '../../store';

export interface IAppState {
  // theme: AppThemeType;
  mobile: boolean;
  loading: boolean;
  globalLoading: boolean;
  sidebarCollapsed: boolean;
  currentPage: number;
  // language: appLanguageEnum;
  showSidedrawer: boolean;
  companyLogo: string | null;
  // brandTheme: roleEnum;
}

const initialState: IAppState = {
  mobile: false,
  loading: false,
  globalLoading: false,
  sidebarCollapsed: false,
  currentPage: 1,
  // language: appLanguageEnum.EN,
  showSidedrawer: false,
  companyLogo: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.mobile = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setGlobalLoading: (state, action: PayloadAction<boolean>) => {
      state.globalLoading = action.payload;
    },
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.sidebarCollapsed = action.payload;
    },
    setShowSidedrawer: (state, action: PayloadAction<boolean>) => {
      state.showSidedrawer = action.payload;
    },
    setCompanyLogo: (state, action: PayloadAction<string>) => {
      state.companyLogo = action.payload;
    },
  },
});

export const selectApp = (state: RootState) => state.app;
export const selectAppLoading = (state: RootState) => state.app?.loading;

export const {
  setSidebarCollapsed,
  setLoading,
  setGlobalLoading,
  setMobile,
  // setAppLanguage,
  setShowSidedrawer,
  setCompanyLogo,
} = appSlice.actions;
export default appSlice.reducer;
