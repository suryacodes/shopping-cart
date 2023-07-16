import * as React from 'react';
import { Card as Cardbs } from 'react-bootstrap';

interface IProdcuts {
  id: Number;
  name: string;
  price: Number;
  imgUrl: string;
}

const Card: React.FC<IProdcuts> = (props: IProdcuts) => {
  return (
    <Cardbs className="m-16">
      <Cardbs.Body>
        <Cardbs.Img src={props.imgUrl} />
      </Cardbs.Body>
    </Cardbs>
  );
};

export default Card;
