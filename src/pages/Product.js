import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";
import Header from "../components/Header";

const Product = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div>En cours de chargement ...</div>
  ) : (
    <div>
      <Header />
      <div className="container-product">
        <div className="container-picture">
          <img src={data.product_pictures[0].secure_url} alt="pic" />
        </div>
        <div className="container-card">
          <span>{data.product_price}€</span>
          <div>
            {data.product_details.map((item, index) => {
              const keys = Object.keys(item); // ["MARQUE"]
              return (
                <div key={index}>
                  <span>
                    {keys[0]} : {item[keys[0]]}
                  </span>
                </div>
              );
            })}
            <div className="user-card">
              <span>
                <img src={data.owner.account.avatar.secure_url} alt="pic" />
              </span>
              <span>{data.owner.account.username}</span>
            </div>
            <h2>{data.product_name}</h2>
            <p>{data.product_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
