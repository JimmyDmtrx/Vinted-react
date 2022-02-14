import { Link } from "react-router-dom";
import Logo from "../assets/img/vinted-logo.png";
const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <input className="search" type="text" placeholder="Votre recherche..." />
      <Link to={"/signup"}>
        <button className="connect-button">s'inscrire</button>
      </Link>
      <Link to={"/login"}>
        <button className="connect-button">se connecter</button>
      </Link>
      <Link to={"/publish"}>
        <button className="sold-button">vends tes articles</button>
      </Link>
    </div>
  );
};

export default Header;
