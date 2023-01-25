import { useState } from "react";
import SettingsAccount from "./SettingsAccount";
import SettingsPassword from "./SettingsPassword";
import SettingsUsername from "./SettingsUsername";

const Settings = () => {
  const [tab, setTab] = useState("username");

  return (
    <div className="settings-container">
      <div className="settings">
        <div className="settings-tabs">
          <button style={{backgroundColor:tab==='username'?'#73c9b3':'#86aca0'}} onClick={() => setTab("username")}>Username</button>
          <button style={{backgroundColor:tab==='password'?'#73c9b3':'#86aca0'}}  onClick={() => setTab("password")}>Password</button>
          <button style={{backgroundColor:tab==='account'?'#73c9b3':'#86aca0'}}  onClick={() => setTab("account")}>Account</button>
        </div>
        <div className="settings-body">
          {tab === "username" ? (
            <SettingsUsername />
          ) : tab === "password" ? (
            <SettingsPassword />
          ) : (
            <SettingsAccount />
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
