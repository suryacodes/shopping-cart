import * as React from 'react';
import { Card as Cardbs } from 'react-bootstrap';

interface IProdcuts {
  id: Number;
  name: string;
  price: Number;
  imgUrl: string;
}

const Card: React.FC<IProdcuts> = ({ id, name, price, imgUrl }) => {
  return (
    <Cardbs className="mt-2">
      <Cardbs.Img src={imgUrl} height="200px" style={{ objectFit: 'cover' }} />
      <Cardbs.Body>
        <Cardbs.Title className="d-flex justify-content-between align-items-baseline">
          <span className="fs-3 ml-2" style={{ wordBreak: 'break-all' }}>
            {name}
          </span>
          <span className="fs-6 ms-2 text-muted">{price.toString()}</span>
        </Cardbs.Title>
      </Cardbs.Body>
    </Cardbs>
  );
};

export default Card;
