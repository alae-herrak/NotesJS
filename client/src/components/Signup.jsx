

const Signup = () => {
  return (
    <div className="signup">
      <div className="auth-title">Signup</div>
      <form className="auth-form">
        <label htmlFor="signup-username">Username</label>
        <input type="text" id="signup-username" />
        <label htmlFor="signup-password">Passowrd</label>
        <input type="password" id="signup-password" />
        <label htmlFor="signup-passwordR">Passowrd repeat</label>
        <input type="password" id="signup-passwordR" />
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
