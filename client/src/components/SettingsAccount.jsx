import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNotesOfUserId, deleteUser } from "../api/requests";
import { Navigate } from "react-router-dom";
import { disconnect } from "../redux/userSlice";

const SettingsAccount = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [deleteNotes, setDeleteNotes] = useState(false);
  const [canDeleteNotes, setCanDeleteNotes] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [canDeleteAccount, setCanDeleteAccount] = useState(false);
  const [canRedirect, setCanRedirect] = useState(false);

  const handleDeleteAllNote = () => {
    if (canDeleteNotes) {
      const confirmation = confirm(
        "Are you sure you want to delete all your notes?"
      );
      if (confirmation) {
        deleteNotesOfUserId(user.userId)
          .then(() => {
            setCanRedirect(true);
          })
          .catch((err) => alert(err.message));
      }
    }
  };

  const handleDeleteAccount = () => {
    if (canDeleteAccount) {
      const confirmation = confirm(
        "Are you sure you want to delete your account?"
      );
      if (confirmation) {
        deleteUser(user.userId)
          .then(() => {
            dispatch(disconnect());
          })
          .catch((err) => alert(err.message));
      }
    }
  };

  return (
    <div className="settings-body-container">
      {canRedirect && <Navigate to="/" />}
      <div>
        <div className="settings-account-container">
          <div className="settings-account-row">
            <button onClick={() => setDeleteNotes(true)}>
              Delete all my notes
            </button>
            {deleteNotes ? (
              <div className="deleteNotes">
                <div className="deleteInfo">
                  Please type "delete-all-my-notes"
                </div>
                <input
                  maxLength={19}
                  type="text"
                  id="deleteAllNotes"
                  onChange={(e) => {
                    if (e.target.value === "delete-all-my-notes")
                      setCanDeleteNotes(true);
                    else setCanDeleteNotes(false);
                  }}
                />
                <div className="deleteNotes-btns">
                  <button
                    disabled={canDeleteNotes ? "" : "disabled"}
                    onClick={handleDeleteAllNote}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setDeleteNotes(false);
                      setCanDeleteNotes(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="settings-account-row">
            <button onClick={() => setDeleteAccount(true)}>
              Delete my account
            </button>
            {deleteAccount ? (
              <div className="deleteAccount">
                <div className="deleteInfo">
                  Please type "delete-my-account"
                </div>
                <input
                  maxLength={17}
                  type="text"
                  id="deleteAccount"
                  onChange={(e) => {
                    if (e.target.value === "delete-my-account")
                      setCanDeleteAccount(true);
                    else setCanDeleteAccount(false);
                  }}
                />
                <div className="deleteAccount-btns">
                  <button
                    disabled={canDeleteAccount ? "" : "disabled"}
                    onClick={handleDeleteAccount}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setDeleteAccount(false);
                      setCanDeleteAccount(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsAccount;
