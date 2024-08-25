import storage from 'redux-persist/lib/storage';

export const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['registeredUserInfo', 'forgotUserInfo', 'login2FAInfo'],
};
