import { Card, Div, Header, IconButton, Image } from '@vkontakte/vkui';
import { ProductI } from '../types';
import {
  Icon24AddCircle,
  Icon24RemoveCircle,
  Icon28DeleteOutline,
} from '@vkontakte/icons';
import { useActionsProduct } from '../hooks/hooks';

interface ProductPropsI extends ProductI {
  order?: boolean;
}

const Product: React.FC<ProductPropsI> = ({
  id,
  title,
  description,
  price,
  quantity,
  thumbnail,
  order,
}) => {
  const handleActionProduct = useActionsProduct(id);

  const header = (
    <Header mode="primary" multiline={true}>
      {title}
    </Header>
  );

  const topCard = (
    <Div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Image
        src={thumbnail}
        borderRadius={order ? 'l' : 's'}
        size={order ? 64 : 200}
        style={{ maxWidth: '100%' }}
      />
      <Div style={{ textAlign: 'center', padding: 0 }}>
        {header}
        {!order ? (
          <>
            {description && (
              <Header mode="tertiary" multiline={true}>
                {description}
              </Header>
            )}
            <Header mode="secondary" multiline={true}>
              Цена товара: <strong>{price} руб.</strong>
            </Header>
          </>
        ) : (
          <>
            <Header mode="secondary" multiline={true}>
              Количество: <strong>{quantity}</strong>
            </Header>
            <Header mode="tertiary" multiline={true}>
              Сумма: <strong>{quantity * price} руб.</strong>
            </Header>
          </>
        )}
      </Div>
    </Div>
  );

  const actionButtonsCard = !order ? (
    <Div
      style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <IconButton
        aria-label="Delete Product"
        onClick={() => handleActionProduct('DELETE')}
      >
        <Icon28DeleteOutline color="gray" />
      </IconButton>
      <Div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <IconButton
          aria-label="Remove Product"
          disabled={quantity === 1}
          onClick={() => handleActionProduct('DECREMENT')}
        >
          <Icon24RemoveCircle color="red" />
        </IconButton>
        <b>{quantity}</b>
        <IconButton
          aria-label="Add Product"
          disabled={quantity === 10}
          onClick={() => handleActionProduct('INCREMENT')}
        >
          <Icon24AddCircle color="blue" />
        </IconButton>
      </Div>
    </Div>
  ) : null;

  return (
    <Card style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
      {topCard}
      {actionButtonsCard}
    </Card>
  );
};
export default Product;
