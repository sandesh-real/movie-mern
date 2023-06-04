import ReactDom from 'react-dom';
import classes from  "./backdrop.module.css";

const Backdrop=(props)=>{
    const element = (
      <div onClick={props.onClick} className={classes.backdrop}></div>
    );
    return ReactDom.createPortal(element,document.querySelector("#backdrop"));
}
export default Backdrop;