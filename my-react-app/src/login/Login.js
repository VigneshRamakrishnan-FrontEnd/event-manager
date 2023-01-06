import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  // user id
  const [user, setUser] = useState("");

  // password
  const [password, setPassword] = useState("");

  function userSubmit(e) {
    setUser(e.target.value);
  }
  function passwordSubmit(e) {
    setPassword(e.target.value);
  }
  function reDirect(e) {
    e.preventDefault();
    if (user !== "" || password !== "") {
      if (user === "admin1" && password === "12345") {
        navigate("/api");
        alert("success");
      } else if (user === "admin2" || password === "54321") {
        navigate("/api");
        alert("success");
      } else {
        alert(" Enter valid information");
      }
    } else {
      alert("informations require");
    }
  }

  return (
    <div className="container-fluid">
      <div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card shadow">
              <div className="card-title text-center border-bottom">
                <h2 className="">Admin Login</h2>
              </div>
              <div className="card-body">
                <form autoComplete="off" onSubmit={reDirect}>
                  <div className="mb-4">
                    <label for="username" className="form-label">
                      Username/Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter Your User Id"
                      value={user}
                      onChange={userSubmit}
                    />
                  </div>
                  <div className="mb-4">
                    <label for="password" className="form-label">
                      Password
                    </label>

                    <input
                      className="form-control"
                      type="password"
                      placeholder="Enter Your Password"
                      name="password"
                      value={password}
                      onChange={passwordSubmit}
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn text-light main-bg">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
