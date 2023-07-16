import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import items from '../data/items.json';
import { Card } from '../components';

const StorePage: React.FC<{}> = (props) => {
  return (
    <>
      <div>StorePage</div>
      <Row md={2} xs={1} lg={3} className="g-3">
        {items.map((item) => {
          return (
            <Col>
              <Card {...item} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default StorePage;
