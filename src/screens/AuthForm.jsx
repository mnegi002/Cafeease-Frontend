import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { baseUrl } from "../url";

export default function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = isSignUpActive
      ? `${baseUrl}/api/createuser`
      : `${baseUrl}/api/loginuser`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      if (isSignUpActive) {
        // Handle sign-up errors
        setErrors(
          json.errors.reduce((acc, error) => {
            acc[error.path] = error.msg;
            return acc;
          }, {})
        );
      } else {
        // Handle login errors
        alert("Incorrect email or password. Please try again.");
      }

      //   alert("Enter valid credentials");
    }

    if (json.success) {
      if (isSignUpActive) {
        alert("User created successfully!");
        // setCredentials({ email: "", password: "", name: "" }); // Reset fields

        handleToggleClick(); // Toggle to Sign In view
      } else {
        localStorage.setItem("authToken", json.authToken);
        localStorage.setItem("userEmail", credentials.email);
        Navigate("/");
      }
    }
  };

  const changeHandler = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: null });
  };

  const handleToggleClick = () => {
    setIsSignUpActive((prev) => !prev);

    // Reset fields when toggling to Sign In view
    setCredentials({ email: "", password: "", name: "" });
  };

  const passwordHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="loginbody">
      <div className={`container ${isSignUpActive ? "active" : ""}`}>
        <div
          className={`form-container ${isSignUpActive ? "sign-up" : "sign-in"}`}
        >
          <form onSubmit={handleSubmit}>
            <h1>{isSignUpActive ? "Create Account" : "Sign In"}</h1>
            <div className="social-icons">
              <NavLink to="#" className="icon">
                <i class="fa-brands fa-instagram"></i>
              </NavLink>
              <NavLink to="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </NavLink>
              <NavLink to="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </NavLink>
              <NavLink to="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </NavLink>
            </div>
            {isSignUpActive && <span>Or use your email for registration</span>}
            {isSignUpActive && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={credentials.name}
                  onChange={changeHandler}
                  required
                />
                {errors.name && <p className="error">*{errors.name}</p>}
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={credentials.email}
              onChange={changeHandler}
              required
            />
            {errors.email && <p className="error">*{errors.email}</p>}
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={credentials.password}
                onChange={changeHandler}
                required
              />

              {showPassword && (
                <span className="passwordspan" onClick={passwordHandler}>
                  <VisibilityOffIcon />{" "}
                </span>
              )}
              {!showPassword && (
                <span className="passwordspan" onClick={passwordHandler}>
                  <VisibilityIcon />{" "}
                </span>
              )}
            </div>
            {errors.password && <p className="error">*{errors.password}</p>}

            {isSignUpActive && <button className="signup">Sign Up</button>}
            {!isSignUpActive && (
              <React.Fragment>
                <NavLink to="#">Forget Your Password?</NavLink>
                <button className="log">Log In</button>
              </React.Fragment>
            )}
          </form>
        </div>
        <div className="toggle-container">
          <div className={`toggle ${isSignUpActive ? "active" : ""}`}>
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Existing User !! Log In here</p>
              <button className="hidden" id="login" onClick={handleToggleClick}>
                LOGIn
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome, Friend!</h1>
              <p>New User !! SignUp here.</p>
              {/* <NavLink to='/createuser'> */}
              <button
                className="hidden"
                id="register"
                onClick={handleToggleClick}
              >
                Sign Up
              </button>
              {/* </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
