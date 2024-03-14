import type { RootState, AppDispatch } from '../store/store';
import type { ProductActions } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsQuery } from '../store/productsApi/productsApi';
import { useEffect } from 'react';
import {
  setProducts,
  setProduct,
} from '../store/productsReducer/productsReducer';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useProducts = () => {
  const { data, isLoading, isError, isSuccess } = useGetProductsQuery();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  useEffect(() => {
    if (data) dispatch(setProducts(data));
  }, [data, dispatch]);

  return { products, isLoading, isError, isSuccess };
};

export const useActionsProduct = (productId: number) => {
  const dispatch = useAppDispatch();
  return (action: ProductActions) => {
    if (action === 'INCREMENT')
      dispatch(setProduct({ type: 'INCREMENT', id: productId }));
    if (action === 'DECREMENT')
      dispatch(setProduct({ type: 'DECREMENT', id: productId }));
    if (action === 'DELETE')
      dispatch(setProduct({ type: 'DELETE', id: productId }));
  };
};
