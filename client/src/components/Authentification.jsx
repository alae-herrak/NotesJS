import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Authentification = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth">
      {isLogin ? <Login /> : <Signup />}
      <span className="auth-switch">
        {isLogin ? "Don't have an account yet?" : "Already have an account?"}
        <a onClick={() => setIsLogin(!isLogin)}>
          {" "}
          {isLogin ? "Sign Up" : "Log In"}
        </a>
      </span>
    </div>
  );
};

export default Authentification;
