import { AppDispatch } from '@/redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setGlobalLoading } from '../app';

// import { authAPI } from '@/api';

export const logoutUser = createAsyncThunk<
  void,
  void,
  { dispatch: AppDispatch }
>('auth-logout-user', async (_, { dispatch }) => {
  try {
    // dispatch(setGlobalLoading(true));
  } catch (error) {
    console.log('error:', error);
    // LogApp('Logout error', error);
  } finally {
    dispatch(setGlobalLoading(false));
  }
});
