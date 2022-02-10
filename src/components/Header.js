import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1>LOGO</h1>
      <input type="text" placeholder="Votre recherche..." />
      <Link to={"/signup"}>
        <button>s'inscrire</button>
      </Link>
      <button>se connecter</button>
      <button>vends tes articles</button>
    </div>
  );
};

export default Header;
