// Step 1: Basic Redux + Persist setup
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage

// Step 2: Configuration for persistence
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // only persist 'cart' slice
};

// Step 3: Combine reducers
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Step 4: Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Step 5: Create the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    }),
});

// Step 6: Create the persistor
export const persistor = persistStore(store);
