import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
const middleWares = [];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["user"], // Ensure "user" matches the key in your reducer
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});
export const persistor = persistStore(store);
