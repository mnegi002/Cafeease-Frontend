
import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from './cartContextAPI/CartContext';
import CartItem from './Cartitem';
import OrderComponent from './payment/OrderComponent';
import { baseUrl } from '../url';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  if (!cartCtx) {
    return null; // If cartCtx is undefined, return null or handle accordingly
  }

  const cartItemAddHandler = async (item) => {
    console.log("ITEM", item, "THIS", this, "PROPS", props);
    cartCtx.addItem(item);

    // await new Promise(()=>{setTimeout(()=>{}, 1000)})

    try {
      const response = await fetch(`${baseUrl}/api/cartitems`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   email: cartCtx.email,
        //   item: {
        //     id: props.id,
        //     title: props.title,
        //     price: props.price,
        //     amount: 1, 
        //   },
        // }),
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"), // Assuming you store user email in localStorage
          items: [
            {
              name: item.title,
              quantity: 1,
              price: item.price,
              totalPrice: item.price,
            },
          ],
          // totalAmount: iltem.price,
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API response:', data);
    } catch (error) {
      console.error('Error updating MongoDB:', error);
    }
  };

  const cartItemRemoveHandler = async (id, item) => {
    console.log(item);
    cartCtx.removeItem(id);
    
// console.log("asdfasdfasDF", item.title)
    try {
      const response = await fetch(`${baseUrl}/api/removecartitems`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: localStorage.getItem("userEmail"), // Assuming you store user email in localStorage
          name : item.title
        }),
      });

      // console.log('body', response.body);
      const data = await response.json();
      console.log('API response:', data);
    } catch (error) {
      console.error('Error updating MongoDB:', error);
    }
  };

  const totalAmount = cartCtx.totalAmount
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          price={item.price}
          title={item.title}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id, item)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal cartItems={cartItems} onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount </span>
        <span>₹{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <OrderComponent
            totalAmount={totalAmount}
            cartItems={cartItems}
          />
        )}
      </div>
    </Modal>
  );
};

export default Cart;
