import * as React from 'react';
import { Button, Card as Cardbs } from 'react-bootstrap';
import { useShoppingCardContext } from '../context/AddCardContext';
import { formatCurrency } from '../utilities/format-currency';
interface IProdcuts {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const Card: React.FC<IProdcuts> = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCardContext();

  const quantity = getItemQuantity(id);

  return (
    <Cardbs key={id} className="mt-2">
      <Cardbs.Img src={imgUrl} height="200px" style={{ objectFit: 'cover' }} />
      <Cardbs.Body>
        <Cardbs.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-3 ml-2" style={{ wordBreak: 'break-all' }}>
            {name}
          </span>
          <span className="fs-6 ms-2 text-muted">{formatCurrency(price)}</span>
        </Cardbs.Title>
        {quantity === 0 ? (
          <Button onClick={() => increaseCartQuantity(id)} className="w-100">
            + Add To Cart
          </Button>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: '.5rem' }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: '.5rem' }}
            >
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div>
                <span className="fs-3">{quantity}</span> in cart
              </div>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </Button>
          </div>
        )}
      </Cardbs.Body>
    </Cardbs>
  );
};

export default Card;
