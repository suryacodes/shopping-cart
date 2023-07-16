import * as React from 'react';
import { Card } from 'react-bootstrap';
import items from '../data/items.json';

const StorePage: React.FC<{}> = (props) => {
  return (
    <>
      <div>StorePage</div>
      {items.map((item) => {
        return <Card item={item} />;
      })}
    </>
  );
};

export default StorePage;
