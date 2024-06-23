import { NavLink } from 'react-router-dom';
import classes from './Container.module.css';
// import DishCard from './Dishes';
// import DishesData from './DishesData'
import ContainerTop from './ContainerTop';
import Slider from './Slider';

const Container = () => {
    return (
        <> 
            <div className={classes.maincontainer} >
                <ContainerTop/>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <h1 className={classes.h1head}>Dine smart with <br /> Cafe<span className={classes.sp}>Ease.</span></h1>
                        <h4 className={classes.h4head} >Say goodbye to queues and hello to the convenience <br/> of  CafeEase, where every order is a smart choice.</h4>
                        <NavLink to="menu"><button className={classes.menulink}>EXPLORE FOOD</button></NavLink>
                    </div>
                    <div className={classes.image}>
                        <img className={classes.img} src="./images/RajmaRice.jpg" width='100%' height='100%' alt="pic" />
                    </div>
                </div>
                {/* <div className={classes.dishes}>
                    <div className={classes.disheshead}>
                        <h2 className={classes.h2dish}>Popular Items</h2>
                    </div>
                    <div className={classes.card}>
                        {DishesData.map((val, ind) => {
                            return <DishCard
                                key={ind} 
                                imgsrc={val.imgsrc}
                                title = {val.title}
                                price = {val.price}/> 
                        })}
                    </div> */}
                {/* </div> */}
                <Slider/>
            </div>
        </>
    )
}
export default Container