import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserByUsername, updateUsername } from "../api/user";
import { disconnect } from "../redux/userSlice";

const SettingsUsername = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [change, setChange] = useState(false);
  const [newUsername, setNewUsername] = useState(user.username);
  const [check, setCheck] = useState({
    canChange: false,
    message: "",
  });

  useEffect(() => {
    if (newUsername !== user.username) {
      if (newUsername.trim() === "") {
        setCheck({
          canChange: false,
          message: "❌ Username can't be empty",
        });
      } else {
        getUserByUsername(newUsername).then((res) => {
          if (res.data) {
            setCheck({
              canChange: false,
              message: "❌ Username is already taken",
            });
          } else {
            setCheck({
              canChange: true,
              message: "✅ Username is available",
            });
          }
        });
      }
    } else {
      setCheck({
        canChange: false,
        message: "",
      });
    }
  }, [newUsername]);

  const handleUsernameChange = () => {
    if (check.canChange) {
      const confirmChange = confirm(
        `Are you sure you want to change your username to '${newUsername}' ?`
      );
      if (confirmChange) {
        updateUsername(user.userId, { username: newUsername }).then(() => {
          alert("Please login again to see changes!");
          dispatch(disconnect());
        });
      }
    }
  };

  return (
    <div className="settings-body-container">
      <div>
        <input
          type="text"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          disabled={!change ? "disabled" : ""}
        />
        <div className="settings-btns">
          {!change ? (
            <button
              className="change-btn"
              onClick={() => {
                setChange(true);
              }}
            >
              Change
            </button>
          ) : (
            <>
              <button className="confirm-btn" onClick={handleUsernameChange}>
                Confirm
              </button>
              <button
                className="cancel-btn"
                onClick={() => {
                  setChange(false);
                  setNewUsername(user.username);
                }}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </div>
      <div className="message">{check.message}</div>
    </div>
  );
};

export default SettingsUsername;
