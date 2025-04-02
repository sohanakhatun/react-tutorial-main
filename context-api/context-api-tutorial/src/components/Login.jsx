import React from "react";
import { useContext , useState} from "react";
import UserContext from "../context/userContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setUser({username},{password});
  };
  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="UserName"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={submitHandler}>Submit</button>
    </>
  );
};

export default Login;
