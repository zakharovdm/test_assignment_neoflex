import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const price =
    props.product.priceWithDiscount !== props.product.priceWithoutDiscount ? (
      <div className={classes.priceInner}>
        <p className={classes.priceWithDiscount}>
          {props.product.priceWithDiscount} ₽
        </p>
        <p className={classes.priceWithoutDiscount}>
          {props.product.priceWithoutDiscount} ₽
        </p>
      </div>
    ) : (
      <div className={classes.priceInner}>
        <p className={classes.priceWithDiscount}>
          {props.product.priceWithDiscount} ₽
        </p>
      </div>
    );

  return (
    <li className={classes.productItem}>
      <div className={classes.innerImg}>
        <img src={props.product.img} alt={props.product.name} />
      </div>
      <div className={classes.inner}>
        <h3 className={classes.productName}>{props.product.name}</h3>
        {price}
      </div>
      <div className={classes.inner}>
        <p className={classes.rate}>{props.product.rate}</p>
        <button type="button" className={classes.buttonBuy}>
          Купить
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
