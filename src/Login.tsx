import React from "react";
import { useState, useContext } from "react";
import { Context } from "./AuthContext";

import TextField from "@mui/material/TextField";

const Login: React.FC = () => {
  const [user, setUser] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [mail, setMail] = useState<string>("");

  const { curUser, setCurUser } = useContext(Context);

  const handleUser = (e: any) => {
    e.preventDefault();
    const localStore = {
      name: user,
      tel: phone,
      email: mail,
    };

    localStorage.setItem("currentUser", JSON.stringify(localStore));
    setCurUser(localStore);
  };

  return (
    <div className="section-form">
      <div>
        <div className="navbar">
          <h1>Hello, User</h1>
        </div>

        <div className="section-form">
          <div className="">
            <form onSubmit={handleUser}>
              <div style={{ margin: 10 }}>
                <TextField
                  className="input-text"
                  type="text"
                  placeholder="Name"
                  value={user}
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                  required
                />
              </div>
              <div style={{ margin: 10 }}>
                <TextField
                  className="input-text"
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                />
              </div>
              <div style={{ margin: 10 }}>
                <TextField
                  className="input-text"
                  placeholder="Email"
                  type="text"
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                  }}
                  required
                />
              </div>

              <div style={{ margin: 20 }}>
                <input className="input-button" type="submit" value="Log In" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
