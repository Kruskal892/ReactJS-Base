import storage from "redux-persist/lib/storage";

export const appPersistConfig = {
  key: "app",
  storage,
  whitelist: ["sidebarCollapsed", "theme"],
};
