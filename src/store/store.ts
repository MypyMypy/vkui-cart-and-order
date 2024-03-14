import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './productsApi/productsApi';
import productsReducer from './productsReducer/productsReducer';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
