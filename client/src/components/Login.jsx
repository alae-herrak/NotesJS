import { useDispatch } from "react-redux";
import { useState } from "react";
import { connect } from "../redux/userSlice";
import { getUserByUsername } from "../api/user";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("All fields are required!");
    } else {
      const user = {
        username: username,
        password: password,
      };
      getUserByUsername(user.username).then((res) => {
        if (!res.data) {
          setErrorMessage("The username you entered doesn't exist!");
        } else {
          if (password !== res.data.password) {
            setErrorMessage("The password you provided is incorrect!");
          } else {
            dispatch(
              connect({
                username: res.data.username,
                userId: res.data._id,
              })
            );
          }
        }
      });
    }
  };

  return (
    <div className="login">
      <div className="auth-title">Login</div>
      <form className="auth-form" onSubmit={handleLogin}>
        <label htmlFor="login-username">Username</label>
        <input
          type="text"
          id="login-username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="login-password">Passowrd</label>
        <input
          type="password"
          id="login-password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button>Login</button>
        {errorMessage !== "" ? (
          <div className="error-message">{errorMessage}</div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Login;
