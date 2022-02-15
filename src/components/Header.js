import { Link } from "react-router-dom";
import Logo from "../assets/img/vinted-logo.png";
import { Navigate } from "react-router-dom";
const Header = ({ setUser, token }) => {
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <input className="search" type="text" placeholder="Votre recherche..." />
      {token ? (
        <button
          className="button-logout"
          onClick={() => {
            setUser(null);
            Navigate("/");
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <div className="button-header">
          <Link to={"/signup"}>
            <button className="connect-button">s'inscrire</button>
          </Link>
          <Link to={"/login"}>
            <button className="connect-button">se connecter</button>
          </Link>
        </div>
      )}
      <div>
        <Link to={"/publish"}>
          <button className="sold-button">vends tes articles</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
