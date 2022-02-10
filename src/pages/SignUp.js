import Header from "../components/Header";
import { useState } from "react";

const SignUp = (event) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log(username);

  return (
    <div>
      <Header />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={username}
            type="text"
            placeholder="username"
            onChange={(event) => {
              setUsername(event.username.value);
            }}
          />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <input type="submit" value={"Valider"} />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
