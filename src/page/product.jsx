import { products } from "../data/products";

const Product = () => {
  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));

  return <ul>{listItems}</ul>;
};

export default Product;
