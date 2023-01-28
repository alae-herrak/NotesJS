import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, updatePassword } from "../api/requests";
import { disconnect } from "../redux/userSlice";

const SettingsPassword = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (passwordR !== password) {
      setErrorMessage("❌ The passwords don't match");
    } else {
      setErrorMessage("");
    }
  }, [passwordR]);

  const handlePasswordChange = () => {
    getUserById(user.userId).then((res) => {
      if (res.data) {
        if (password === res.data.password) {
          setErrorMessage("Password already in use");
        } else {
          const confirmChange = confirm(
            "Do you really want to update your password?"
          );
          if (confirmChange) {
            updatePassword(user.userId, {
              password: password,
            }).then(() => {
              alert("Please login again");
              dispatch(disconnect());
            });
          }
        }
      }
    });
  };

  return (
    <div className="settings-body-container">
      <div>
        <div className="settings-password-container">
          <div className="settings-row">
            <label htmlFor="password">New password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="settings-row">
            <label htmlFor="passwordR">Confirm new password</label>
            <input
              type="password"
              id="passwordR"
              onChange={(e) => {
                setPasswordR(e.target.value);
              }}
            />
          </div>
          {errorMessage === "" ? (
            ""
          ) : (
            <div className="error-message">{errorMessage}</div>
          )}
          <div className="settings-row">
            <button onClick={handlePasswordChange}>Change</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPassword;
