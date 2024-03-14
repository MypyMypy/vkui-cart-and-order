import { createSlice } from '@reduxjs/toolkit';
import type { ProductI, ProductActionsReducer } from '../../types';

const initialState: ProductI[] = [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (_state, action) => {
      return action.payload;
    },
    setProduct: (state, action: ProductActionsReducer) => {
      const product = state.find((item) => item.id === action.payload.id);
      if (product) {
        if (action.payload.type === 'INCREMENT') {
          product.quantity++;
        }
        if (action.payload.type === 'DECREMENT') {
          product.quantity--;
        }
        if (action.payload.type === 'DELETE') {
          return state.filter((product) => product.id !== action.payload.id);
        }
      }
    },
  },
});

export const { setProducts, setProduct } = productSlice.actions;

export default productSlice.reducer;
