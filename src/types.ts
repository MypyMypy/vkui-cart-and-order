export interface ProductI {
  id: number;
  title: string;
  description?: string;
  price: number;
  quantity: number;
  total: number;
  thumbnail?: string;
  [key: string]: unknown;
}

export type ProductActions = 'INCREMENT' | 'DECREMENT' | 'DELETE';

export interface ProductActionsReducer {
  type: string;
  payload: {
    id: number;
    type: ProductActions;
  };
}
