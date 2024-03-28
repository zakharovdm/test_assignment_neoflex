import Container from "../components/Container/Container";
import Goods from "../components/Goods/Goods";
import data from "../data";

const Products = () => {
  const headphones = data.headphones;
  const wirelessHeadphones = data.wirelessHeadphones;

  return <Container>
    <h2>Наушники</h2>
    <Goods data={headphones}/>
    <h2>Беспроводные наушники</h2>
    <Goods data={wirelessHeadphones}/>
  </Container>
};

export default Products;