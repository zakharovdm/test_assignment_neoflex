const ProductItem = (props) => {
  const price =
    props.product.priceWithDiscount === props.product.priceWithoutDiscount ? (
      <>
        <p>{props.product.priceWithDiscount} ₽</p>
        <p>{props.product.priceWithoutDiscount} ₽</p>
      </>
    ) : (
      <p>{props.product.priceWithDiscount} ₽</p>
    );

  return (
    <li>
      <img src={props.product.img} alt={props.product.name} />
      <p>{props.product.name}</p>
      {price}
      <p>{props.product.rate}</p>
      <button>Купить</button>
    </li>
  );
};

export default ProductItem;
