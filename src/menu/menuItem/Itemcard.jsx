import { useContext } from 'react'
import classes from './Itemcard.module.css'
import './Itemcarddata'
import CartContext from '../../cart/cartContextAPI/CartContext'
import { baseUrl } from '../../url'
const ItemCard = (props) => {
    const cartCtx = useContext(CartContext);
    const itemHandler = async() =>{
        // console.log("THE AMOUNT", amount);
        try{
          cartCtx.addItem({
            id:props.id,
            title :props.title,
            price : props.price,
            amount :  1})
            // console.log(cartCtx)
            const res = await fetch(`${baseUrl}/api/cartitems`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email: localStorage.getItem('userEmail'), // Assuming you store user email in localStorage
                  items: [
                    {
                      name: props.title,
                      quantity: 1,
                      price: props.price,
                      totalPrice: props.price,
                    },
                  ],
                  totalAmount: props.price,
                }),
              })
              const data = await res.json();
              console.log('Item added to MongoDB:', data);
          } catch (error) {
              console.error('Error adding item to MongoDB:', error);
          }
        }
    return (
        <div className={classes.divmain}>
            <div className={classes.container}>
                <div className={classes.box} id={classes.box1}>
                    <h3>{props.title}</h3>
                    <h4>₹{props.price}</h4>
                    <p> {props.info}</p>
                </div>
                <div className={classes.box} id={classes.box2}>
                    
                    <img src={props.imgsrc} alt="img" />
                    
                    <button className={classes.button} onClick={itemHandler}><b>+</b> Add</button>
                </div>
            </div>
            <div className={classes.line}></div>
        </div>
    )
}
export default ItemCard