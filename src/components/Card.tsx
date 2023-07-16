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
    <Cardbs className="m-16">
      <Cardbs.Body>
        <Cardbs.Img src={imgUrl} />
      </Cardbs.Body>
    </Cardbs>
  );
};

export default Card;
