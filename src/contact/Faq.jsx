// import { useState } from "react"
import Accordion from "./Accordion"
import FaqData from "./FaqData"
import classes from "./Faq.module.css"
const FAQ = () =>{

    return (
        <>
        <div className={classes.question}>
        <h1>Frequently Asked Questions</h1>
        {FaqData.map((val,ind)=>{
            return <Accordion 
            key = {ind} 
            question={val.question} 
            answer={val.answer}/>
        })}
        
        </div>
        </>
    )
}
export default FAQ