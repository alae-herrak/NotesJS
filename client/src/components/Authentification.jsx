import Login from "./Login";
import Signup from "./Signup";

const Authentification = () => {
  return (
    <div className="auth">
      <Login />
      <div className="auth-vertical-lign"></div>
      <Signup />
    </div>
  );
};

export default Authentification;
