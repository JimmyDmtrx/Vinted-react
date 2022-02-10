import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        { username, email, password, newsletter }
      );
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
            type="text"
            placeholder="password"
            onChange={handlePasswordChange}
          />
          <input className="submitButton" type="submit" value={"Valider"} />
          <input type="checkbox" onChange={handleCheckBox} />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
