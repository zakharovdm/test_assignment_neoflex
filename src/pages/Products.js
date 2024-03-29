import Container from '../components/Container/Container';
import Goods from '../components/Goods/Goods';
import data from '../data';

import classes from './Products.module.css';

const Products = () => {
  const headphones = data.headphones;
  const wirelessHeadphones = data.wirelessHeadphones;

  return (
    <Container>
      <div className={classes.headphonesInner}>
        <h2 className={classes.title}>Наушники</h2>
        <Goods data={headphones} />
      </div>
      <div className={classes.wirelessHeadphonesInner}>
        <h2 className={classes.title}>Беспроводные наушники</h2>
        <Goods data={wirelessHeadphones} />
      </div>
    </Container>
  );
};

export default Products;
