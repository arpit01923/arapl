import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import commonReducer from "./slices/common";

const persistConfig = {
  key: "root",
  storage,
};
const reducers = combineReducers({
  Common: commonReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
