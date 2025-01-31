import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Correct import for localStorage
import { persistReducer, persistStore } from "redux-persist"; // Correct imports
import { rootReducer } from "./root-reducer";

// Persist Config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // Only persist the "cart" slice
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware
const middleWares = [];
if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

// Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});

// Persistor
export const persistor = persistStore(store);
