import React, { useState } from "react";
// import classes from "./Login.module.css";
import './Login.css'
import { baseUrl } from "../url";
// import { Link, NavLink } from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({ email: "", password: "" , name :"" });
  const [errors, setErrors] = useState({});
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${baseUrl}/api/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:credentials.name,
        email:credentials.email,
        password : credentials.password
      })
    });
    const json = await  response.json()
    console.log(json)
    if (!json.success){
      // alert('Enter valid credentials')
      setErrors(json.errors.reduce((acc, error) => {
        acc[error.path] = error.msg;
        return acc;
      }, {}));
    } else {
      // Clear errors if the request was successful
      setErrors({});
      // Handle success, e.g., redirect or show a success message
      console.log("User created successfully!");
      alert("User created successfully!")
    }
    
  };
  const changeHandler = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: null });

  };

  const handleToggleClick = () => {
    setIsSignUpActive((prev) => !prev);
  };
  return (
    // <div className={classes.body}>
    //   <div className={classes.container}>
        
    //     <form onSubmit={handleSubmit}>
    //       <h1> Create Account</h1>

    //       <div className={classes["social-icons"]}>
    //         <NavLink to="#" className={classes.icon}>
    //           <i className="fa-brands fa-google-plus-g"></i>
    //         </NavLink>
    //         <NavLink to="#" className={classes.icon}>
    //           <i className="fa-brands fa-facebook-f"></i>
    //         </NavLink>
    //         <NavLink to="#" className={classes.icon}>
    //           <i className="fa-brands fa-github"></i>
    //         </NavLink>
    //         <NavLink to="#" className={classes.icon}>
    //           <i className="fa-brands fa-linkedin-in"></i>
    //         </NavLink>
    //       </div>
    //       <span>OR</span>

    //       <input
    //         type="text"
    //         placeholder="Name"
    //         name="name"
    //         value={credentials.name}
    //         onChange={changeHandler}
    //         required
    //       />
    //  {errors.name && <p className={classes.error}>*{errors.name}</p>}
    //       <input
    //         className={classes.input}
    //         type="email"
    //         value={credentials.email}
    //         name="email"
    //         placeholder="Email"
    //         onChange={changeHandler}
    //         required
    //       />
    //             {errors.email && <p className={classes.error}>*{errors.email}</p>}

    //       <input
    //         type="password"
    //         placeholder="Password"
    //         name="password"
    //         onChange={changeHandler}
    //         required
    //       />
    //               {errors.password && <p className={classes.error}>*{errors.password}</p>}

    //       <button type="submit">Sign Up</button>
    //       <Link to="/login">Already a user</Link>
    //     </form>
    //   </div>
    // </div>
    
    <>
    <div className="loginbody">
     <div className={`container ${isSignUpActive ? 'active' : ''}`}>
      <div className={`form-container sign-up ${isSignUpActive ? 'active' : ''}`}>
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="https://www.gmail.com" target="_blank" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank"  className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.github.com" target="_blank"  className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>Or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={credentials.name}
            onChange={changeHandler}
            required
          />
     {errors.name && <p className="error">*{errors.name}</p>}
        <input
            // className={classes.input}
            type="email"
            value={credentials.email}
            name="email"
            placeholder="Email"
            onChange={changeHandler}
            required
          />
                {errors.email && <p className="error">*{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={changeHandler}
            required
          />
                  {errors.password && <p className="error">*{errors.password}</p>}
          <button>Sign Up</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className={`toggle ${isSignUpActive ? 'active' : ''}`}>
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="login" onClick={handleToggleClick}>
              LogIn 
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome, Friend!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="register" onClick={handleToggleClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
