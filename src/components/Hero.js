import Heropic from "../assets/img/vinted-hero.jpeg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="relative">
      <div className="hero">
        <img className="heropic" src={Heropic} alt="hero" />
      </div>
      <div className="tabHero">
        <p>prets à faire du tri dans vos placards ?</p>
        <Link to={"/publish"}>
          <button className="button-hero">commencez à vendre</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
