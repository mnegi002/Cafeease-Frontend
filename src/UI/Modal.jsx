import classes from './Modal.module.css'
const Backdrop = props =>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
    
}

const Overlay = (props)=>{
    return <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    
}
// const portalElement = document.getElementById('overlays')
const Modal = (props)=>{
    return (
        <>
        <Backdrop onClose={props.onClose}/>
        <Overlay>{props.children}</Overlay>
        </>
    )
}
export default Modal