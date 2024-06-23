import classes from "./Dishes.module.css"
const DishCard = (props) =>{
    return (
        <>
        <div className={classes.dishcarddiv}>
            <div className={classes.picdiv}>
                <img className={classes.cardimg} src={props.imgsrc} alt="pic" width="100" height="100"/>
            </div>
            <div className={classes.titlediv}>
                <h2> {props.title}</h2>
                <h3> {props.price} </h3>
            </div>
            <div className={classes.buttondiv}>
                <button >Add to Cart </button>
            </div>
        </div>
        </>
    )
}
export default DishCard