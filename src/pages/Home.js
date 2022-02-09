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
  return (
    <div>
      <Header />
      <Hero />
      <div>{data.offers}</div>
      <Link to={`/product/`}>Go to product with Link</Link>
    </div>
  );
};
export default Home;
