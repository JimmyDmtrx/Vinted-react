import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
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
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username, email, password, newsletter }
      );
      console.log(response.data.token);
      if (response.data.token) {
        setUsername(response.data.token);
        // const token = response.data.token;
        // Cookies.set("userToken", token, { expires: 10 });
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte");
      }
    }
  };

  return (
    <div>
      <div className="formcontain">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="h2form">Créez un compte</h1>
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
          <span>{errorMessage}</span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
