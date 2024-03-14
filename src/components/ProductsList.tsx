import { CardGrid, Div, Header } from '@vkontakte/vkui';
import Product from './Product';
import type { ProductI } from '../types';
import { useEffect, useState } from 'react';

const ProductsList: React.FC<{
  products: ProductI[];
  order?: boolean;
}> = ({ products, order }) => {
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(
      products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      )
    );
  }, [products]);

  return (
    <Div>
      <Header>{order ? `Итого: ${total} руб.` : 'Корзина'}</Header>
      <CardGrid size="l">
        {products.map((product) => (
          <Product key={product.id} {...product} order={order} />
        ))}
      </CardGrid>
    </Div>
  );
};

export default ProductsList;
