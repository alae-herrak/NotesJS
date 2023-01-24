import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { disconnect } from "../redux/userSlice";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <header>
      <div className="logo">NotesJS</div>
      {user.userId === "" ? (
        ""
      ) : (
        <>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/settings">Settings</Link>
          </nav>
          <div className="nav-user">
            <div className="nav-user-name">{user.username}</div>
            <button onClick={() => dispatch(disconnect())}>Diconnect</button>
          </div>{" "}
        </>
      )}
    </header>
  );
};

export default Navbar;
