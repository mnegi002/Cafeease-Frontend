import React from "react";
import classes from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LogoutIcon from '@mui/icons-material/Logout';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function Logout() {
  // const [isLoggedIn , setIsLoggedIn ] = useState(!!localStorage.getItem('authToken'))
  const Navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    // setIsLoggedIn(false)
    localStorage.removeItem("userEmail");
    Navigate("/");
    window.location.reload()
  };

  return (
    <>
      <div className={classes.userdiv}>
        
        {localStorage.getItem("authToken") ? (<>
        <div className={classes.usericon}>
          <LogoutOutlinedIcon/>
        </div>
          <div className={classes.logoutdiv}>
            <button className={classes.logout} onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </>
        ) : (
          <>
          <div className={classes.usericon}>
          <AccountCircleIcon/>
        </div>
          <div className={classes.navlog}>
            <NavLink
              className={classes.login}
              to="/authform">
              Login
            </NavLink>
            
          </div>
            </>
        )}
      </div>
    </>
  );
}
