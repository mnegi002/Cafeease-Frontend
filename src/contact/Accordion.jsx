import { useState } from "react"
import classes from "./Accordion.module.css"
const Accordion = (props) => {
    const [showData, setShowData] = useState(false)
    const accordionHandler = () => {
        setShowData(!showData)
    }
    return (
        <>
            <div className={classes.accordion}>
                <div className={classes.accordionques} onClick={accordionHandler}>
                    <h3>{props.question}</h3>
                    <p className={classes.sign}>{!showData ? "+" : "x"}</p>
                </div>
                
                    {showData && <p className={classes.ans}>{props.answer}</p>}
               
            </div>

        </>
    )
}
export default Accordion