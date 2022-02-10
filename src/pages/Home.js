import Header from "../components/Header";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  //  cliquer sur une annonce
  // envoyer l'id de l'annonce en params dans l'url
  // récupérer cet id dans Offer.js
  // faire une requête dans cette page pour récupérer les infos de cette annonce
  // afficher ces infos
  return isLoading ? (
    <p>ca charge</p>
  ) : (
    <div>
      <Header />
      <Hero />
      <div className="containCard">
        {data.offers.map((elem, index) => {
          // console.log(elem);
          // console.log(elem.product_details);
          return (
            <div>
              <Link to={`/product/${elem._id}`}>
                <div key={elem._id} className="card">
                  <div className="headOfCard">
                    <img
                      className="profilePic"
                      src={elem.owner.account.avatar.secure_url}
                      alt="pic"
                    />
                    <div>
                      <p>{elem.owner.account.username}</p>
                    </div>
                  </div>
                  <img
                    className="productPic"
                    src={elem.product_pictures[0].secure_url}
                    alt="pic"
                  />
                  <p className="productDescription">{elem.product_name}</p>
                  <p className="product-price">{elem.product_price}€</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
