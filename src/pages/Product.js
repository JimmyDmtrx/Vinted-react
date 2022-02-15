import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/CSS/Product.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

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

          <div className="container-card">
            <div className="offer-list">
              <span className="offer-price">{data.product_price}€</span>
              {data.product_details.map((item, index) => {
                const keys = Object.keys(item); // ["MARQUE"]
                return (
                  <div key={index}>
                    <ul>
                      <li className="list-offer">
                        <span className="key-prod">{keys[0]} </span>:
                        <span>{item[keys[0]]}</span>
                      </li>
                    </ul>
                  </div>
                );
              })}
              <div className="divider"></div>
              <div className="user-card">
                <h2 className="h2-card">{data.product_name}</h2>
                <p className="description-card">{data.product_description}</p>
                <div className="offer-avatar">
                  <img src={data.owner.account.avatar.secure_url} alt="pic" />

                  <span>{data.owner.account.username}</span>
                </div>
              </div>
              <Link to={"/payment"}>
                <button className="button-offer">Acheter</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
