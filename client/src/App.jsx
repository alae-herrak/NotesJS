import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { Authentification, Home, Navbar, Settings } from "./components";

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={user.userId === "" ? <Authentification /> : <Home />}
        />
        {user.userId === "" ? (
          ""
        ) : (
          <Route path="/settings" element={<Settings />} />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
