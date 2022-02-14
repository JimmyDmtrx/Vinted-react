import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username, email, password, newsletter }
      );
      console.log(response.data.token);
      if (response.data.token) {
        const token = response.data.token;
        Cookies.set("token", token, { expires: 10 });
      }

      // const handleHome = () => {
      //   navigate("/");
      // };
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleUserNamechange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleCheckBox = () => {
    setNewsletter(true);
  };

  return (
    <div>
      <Header />
      <div className="formcontain">
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="inputForm"
            value={username}
            type="text"
            placeholder="username"
            onChange={handleUserNamechange}
          />
          <input
            className="inputForm"
            value={email}
            type="text"
            placeholder="email"
            onChange={handleEmailChange}
          />
          <input
            className="inputForm"
            type="password"
            placeholder="password"
            onChange={handlePasswordChange}
          />

          <span className="newsletter">
            <input type="checkbox" onChange={handleCheckBox} />
            S'inscrire à notre newsletter
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes et
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </span>
          <input className="submitButton" type="submit" value={"Valider"} />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
