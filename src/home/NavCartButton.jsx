
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext, useEffect, useState } from 'react'
import classes from './NavCartButton.module.css'
import CartContext from '../cart/cartContextAPI/CartContext'
const CartButton = (props) => {
    const cartCtx = useContext(CartContext)
    const [isHighlighted , setIsHighlighted] = useState(false)
    // console.log("ITEMS",cartCtx.items);
    const numOfCartItems = cartCtx.items.reduce((curNumber , item )=>{
        // console.log({item})
        // console.log({curNumber})
        // console.log(curNumber + item.amount.detail)
        return curNumber + item.amount
    },0)
    // const email = localStorage.getItem('userEmail')
    
    // const numOfCartItems = cartCtx.items.length;
    //currnumber = 3, cartCtx.items.length = 4
    //.reduce, 3 + 1 + 1 + 1 + 1
    const {items} = cartCtx
    // console.log(items)
    // const numOfCartItems = cart Ctx.items.length
    // console.log(numOfCartItems)
    const navCart = `${classes.cartlogo} ${isHighlighted ? classes.bump : ' ' }`
    useEffect(()=>{
        if(items.length===0){
            return 
        }
        setIsHighlighted(true)
        const timer = setTimeout(()=>{
            setIsHighlighted(false)
        },300)
        return ()=>{
            clearTimeout(timer)
        }
    },[items])
    return (
        <>
        {localStorage.getItem('userEmail') && 

            <div  className={navCart} onClick={props.onClick} >
<ShoppingBagIcon className={classes.carticon} />
<span className={classes.cartspan}>{numOfCartItems}</span>
                {/* <AddShoppingCartIcon className={classes.carticon}/>
                <span className={classes.cartspan}>{numOfCartItems}</span> */}
            </div>
        }
        </>
    )
}
export default CartButton