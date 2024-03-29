import { Fragment } from 'react';
import ProductItem from './ProductItem';
import classes from './Goods.module.css';

const Goods = (props) => {
  const goods = props.data;

  return (
    <Fragment>
      <ul className={classes.goodsList}>
        {goods.map((item) => (
          <ProductItem product={item} />
        ))}
      </ul>
    </Fragment>
  );
};

export default Goods;
