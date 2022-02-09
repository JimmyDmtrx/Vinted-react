import Header from "../components/Header";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const Home = () => {
  const id = "87654543";
  return (
    <div>
      <Header />
      <Hero />
      <Link to={`/product/${id}`}>Go to product with Link</Link>
    </div>
  );
};
export default Home;
