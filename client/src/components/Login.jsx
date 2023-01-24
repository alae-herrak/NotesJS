

const Login = () => {
  return (
    <div className="login">
      <div className="auth-title">Login</div>
      <form className="auth-form">
        <label htmlFor="login-username">Username</label>
        <input type="text" id="login-username" />
        <label htmlFor="login-password">Passowrd</label>
        <input type="password" id="login-password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
