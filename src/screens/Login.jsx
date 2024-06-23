// import React, { useState } from "react";
// // import classes from "./Login.module.css";
// import "./Login.css";
// import { Link, NavLink, useNavigate } from "react-router-dom";

// export default function Login() {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const [isSignUpActive, setIsSignUpActive] = useState(false);
//   const Navigate = useNavigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch("http://localhost:4000/api/loginuser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: credentials.email,
//         password: credentials.password,
//       }),
//     });
//     const json = await response.json();
//     console.log(json);
//     if (!json.success) {
//       alert("Enter valid credentials");
//     }
//     if (json.success) {
//       console.log("json", JSON);
//       localStorage.setItem("authToken", json.authToken);
//       localStorage.setItem("userEmail", credentials.email);
//       Navigate("/");
//     }
//   };
//   const changeHandler = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

//   const handleToggleClick = () => {
//     setIsSignUpActive((prev) => !prev);
//   };

//   return (
//     // <div className={classes.body}>
//     //   <div className={classes.container}>
//     //     <form onSubmit={handleSubmit}>
//     //       <h1> Login</h1>

//     //       <div className={classes["social-icons"]}>
//     //         <NavLink to="#" className={classes.icon}>
//     //           <i className="fa-brands fa-google-plus-g" />
//     //         </NavLink>

//     //         <NavLink to="#" className={classes.icon}>
//     //           <i className="fa-brands fa-facebook-f" />
//     //         </NavLink>
//     //         <NavLink to="#" className={classes.icon}>
//     //           <i className="fa-brands fa-github" />
//     //         </NavLink>
//     //         <NavLink to="#" className={classes.icon}>
//     //           <i className="fa-brands fa-linkedin-in" />
//     //         </NavLink>
//     //       </div>
//     //       <span>OR</span>

//     //       <input
//     //         className={classes.input}
//     //         type="email"
//     //         value={credentials.email}
//     //         name="email"
//     //         placeholder="Email"
//     //         onChange={changeHandler}
//     //       />
//     //       <input
//     //         type="password"
//     //         placeholder="Password"
//     //         name="password"
//     //         onChange={changeHandler}
//     //       />

//     //       <button type="submit">Log In </button>
//     //       <Link to="/createuser">I'm a new user</Link>
//     //     </form>
//     //   </div>
//     // </div>
    
    
//     <>
//     <div className="loginbody">
//      <div className={`container ${isSignUpActive ? 'active' : ''}`}>
//       <div className={`form-container sign-in ${isSignUpActive ? '' : 'active'}`}>
//         <form onSubmit={handleSubmit}>
//           <h1>Sign In</h1>
//           <div className="social-icons">
//             <a href="#" className="icon">
//               <i className="fa-brands fa-google-plus-g"></i>
//             </a>
//             <a href="#" className="icon">
//               <i className="fa-brands fa-facebook-f"></i>
//             </a>
//             <a href="#" className="icon">
//               <i className="fa-brands fa-github"></i>
//             </a>
//             <a href="#" className="icon">
//               <i className="fa-brands fa-linkedin-in"></i>
//             </a>
//           </div>
//           <span>or use your email and password</span>
//           <input
            
//             type="email"
//             value={credentials.email}
//             name="email"
//             placeholder="Email"
//             onChange={changeHandler}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={changeHandler}
//           />
          
//           <a href="#">Forget Your Password?</a>
//           <button>Log In</button>
//         </form>
//       </div>
//       <div className="toggle-container">
//         <div className={`toggle ${isSignUpActive ? 'active' : ''}`}>
//           <div className="toggle-panel toggle-left">
//             <h1>Welcome Back!</h1>
//             <p>Enter your personal details to use all site features</p>
//             <button className="hidden" id="login" onClick={handleToggleClick}>
//               LogIn
//             </button> 
//          </div> 
//           <div className="toggle-panel toggle-right">
//             <h1>Welcome, Friend!</h1>
//             <p>Enter your personal details to use all site features</p>
//             <button className="hidden" id="register" onClick={handleToggleClick}>
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>

//     </div>
//     </>
//   );
// }
