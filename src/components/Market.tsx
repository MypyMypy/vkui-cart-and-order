import { Div, Panel, PanelHeader, Spinner } from '@vkontakte/vkui';
import { useProducts } from '../hooks/hooks';
import ProductsList from './ProductsList';

const MarketPanel: React.FC<{ id: string }> = ({ id }) => {
  const { products, isLoading, isError, isSuccess } = useProducts();

  return (
    <Panel id={id}>
      <PanelHeader>VK Market Task</PanelHeader>
      {isError && <p>Fetching Error</p>}
      {isLoading && <Spinner size="regular">Loading...</Spinner>}
      {isSuccess && (
        <Div className="market">
          {products.length ? (
            <>
              <ProductsList products={products} />
              <ProductsList products={products} order />
            </>
          ) : (
            <p>Корзина пуста. Попробуйте выбрать что-нибудь еще!</p>
          )}
        </Div>
      )}
    </Panel>
  );
};

export default MarketPanel;
