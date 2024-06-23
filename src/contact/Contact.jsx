import FAQ from "./Faq"
import Form from "./Form"
import Map from "./Map"
import classes from './Contact.module.css'

const Contact = () =>{
    return (
        <>
        <div className={classes.maincontact}>
        <FAQ/>
        <div className={classes.contact}>
            <Form/>
            <Map/>
        </div>
        </div>
        </>

    )
}
export default Contact