
import classes from './Menu.module.css'
const MenuButton = (props)=>{
    
    return (
        <button className={props.isSelected ? classes.active : ' '} onClick={props.onClick}>{props.children}</button>
    )
}
export default MenuButton