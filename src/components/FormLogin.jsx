import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../utils/auth";

function FormLogin() {
   const navigate = useNavigate();
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessage, setErrorMessage] = useState("");

   const handleLogin = (event) => {
     event.preventDefault();

     const dummyUser = { username: "admin", password: "alterra123" };
     const user = JSON.parse(localStorage.getItem("user"));

     if (user && user.username === username && user.password === password) {
       localStorage.setItem("isLoggedIn", true);
       auth.storeAuthCredential(user.token);
       navigate("/");
       window.alert("Login Successful!");
     } else if (
       username === dummyUser.username &&
       password === dummyUser.password
     ) {
       localStorage.setItem("user", JSON.stringify(dummyUser));
       localStorage.setItem("isLoggedIn", true);
       auth.storeAuthCredential(dummyUser.token); 
       navigate("/");
       window.alert("Login Successful!");
     } else {
       setErrorMessage("Invalid username or password");
     }
   };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            autoComplete="username"
            placeholder="enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            autoComplete="current-password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
}
export default FormLogin;
