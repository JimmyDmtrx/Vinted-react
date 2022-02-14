import { Link } from "react-router-dom";
import Logo from "../assets/img/vinted-logo.png";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="logo" />
      <input type="text" placeholder="Votre recherche..." />
      <Link to={"/signup"}>
        <button>s'inscrire</button>
      </Link>
      <Link to={"/login"}>
        <button>se connecter</button>
      </Link>

      <button>vends tes articles</button>
    </div>
  );
};

export default Header;
