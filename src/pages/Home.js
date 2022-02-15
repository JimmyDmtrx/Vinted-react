import Header from "../components/Header";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [page, setPage] = useState(1);

  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${limit}&page=${page}`
      );
      // console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [page]);
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
              <div key={elem._id} className="card">
                <div className="headOfCard">
                  {elem.owner.account.avatar ? (
                    <img
                      className="profilePic"
                      src={elem.owner.account.avatar.secure_url}
                      alt="pic"
                    />
                  ) : (
                    ""
                  )}

                  <div>
                    <p>{elem.owner.account.username}</p>
                  </div>
                </div>
                <Link to={`/product/${elem._id}`}>
                  <img
                    className="productPic"
                    src={elem.product_image.secure_url}
                    alt="pic"
                  />
                </Link>
                <p className="productDescription">{elem.product_name}</p>
                <p className="product-price">{elem.product_price}€</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="contain-pagi">
        <button className="button-pagination" onClick={() => setPage(page - 1)}>
          Page précédente
        </button>
        <button className="button-pagination" onClick={() => setPage(page + 1)}>
          Page suivante
        </button>
      </div>
    </div>
  );
};

export default Home;
