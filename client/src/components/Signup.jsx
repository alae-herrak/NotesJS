import { useDispatch } from "react-redux";
import { useState } from "react";
import { createUser, getUserByUsername } from "../api/requests";
import { connect } from "../redux/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (
      username.trim() === "" ||
      password.trim() === "" ||
      passwordR.trim() === ""
    ) {
      setErrorMessage("All fields are required!");
    } else {
      if (password !== passwordR) {
        setErrorMessage("Passwords have to be matching!");
      } else {
        const user = {
          username: username,
          password: password,
          passwordR: passwordR,
        };
        getUserByUsername(user.username).then((res) => {
          if (!res.data) {
            createUser(user)
              .then((res) => {
                dispatch(
                  connect({
                    username: res.data.username,
                    userId: res.data._id,
                  })
                );
              })
              .catch((err) => {
                alert("An error has occured!");
                console.log(err);
              });
          } else {
            setErrorMessage("Username is already taken!");
          }
        });
      }
    }
  };

  return (
    <div className="signup">
      <div className="auth-title">Signup</div>
      <form className="auth-form" onSubmit={handleSignup}>
        <label htmlFor="signup-username">Username</label>
        <input
          type="text"
          id="signup-username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="signup-password">Password</label>
        <input
          type="password"
          id="signup-password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label htmlFor="signup-passwordR">Password repeat</label>
        <input
          type="password"
          id="signup-passwordR"
          onChange={(e) => {
            setPasswordR(e.target.value);
          }}
        />
        <button type="submit">Signup</button>
        {errorMessage !== "" ? (
          <div className="error-message">{errorMessage}</div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default Signup;
