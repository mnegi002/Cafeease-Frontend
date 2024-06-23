import {Outlet} from "react-router-dom"
import classes from './Footer.module.css'
const Footer = () =>{
    const currentYear = new Date().getFullYear()
    
    return (
        <>
        <div className={classes.footer}>
            <p> Copyright &copy; <span className={classes.footerspan}>{currentYear}</span> Designed by <span className={classes.footerspan}>Innovative Engineers.</span></p>
        </div>
        <Outlet/>     
        </>
    )
}
export default Footer