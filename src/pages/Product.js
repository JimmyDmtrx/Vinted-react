import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Product comp</h2>
      <span>the product id is : {id}</span>
    </div>
  );
};
export default Product;
