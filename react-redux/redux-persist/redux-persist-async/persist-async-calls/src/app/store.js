
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import { combineReducers } from 'redux';

import userReducer from '../features/users/userSlice';

// Logger middleware

// storeAPI gives access to dispatch and getState.
// next is the function to call the next middleware or the reducer.

const loggerMiddleware = storeAPI => next => action => {
  console.log('%cDispatching:', 'color: #00bfff', action);
  const result = next(action);
  console.log('%cNext State:', 'color: #32cd32', storeAPI.getState());
  return result;
}

// Combine reducers
const rootReducer = combineReducers({
  users: userReducer,
});

// Persist config
const persistConfig = {
  key: 'root',
  storage,
};

// Wrap root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(loggerMiddleware),
});

export const persistor = persistStore(store);