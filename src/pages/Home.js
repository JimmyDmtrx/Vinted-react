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
  const id = "87654543";
  //  cliquer sur une annonce
  // envoyer l'id de l'annonce en params dans l'url
  // récupérer cet id dans Offer.js
  // faire une requête dans cette page pour récupérer les infos de cette annonce
  // afficher ces infos
  return isLoading ? (
    <p>ca charge</p>
  ) : (
    <div>
      {/* <Header />
      <Hero /> */}
      {data.offers.map((elem, index) => {
        return (
          <div key={index}>
            <span>{elem.product_details}</span>
          </div>
        );
      })}
      {/* <Link to={`/product/`}>Go to product with Link</Link> */}
    </div>
  );
};

export default Home;
