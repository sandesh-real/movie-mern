import { useRef } from "react";
import { CSSTransition } from "react-transition-group"
import Backdrop from '../util/backdrop';
import classes from './modal.module.css';
import "./transition.css"
const Modal=(props)=>{
  const nodeRef = useRef(null);
 return (
   <>
     {props.openModal && <Backdrop onClick={props.onCancel} />}
     <CSSTransition
       in={props.openModal}
       mountOnEnter
       unmountOnExit
    
       timeout={200}
       classNames="newmodal"
     >
  

       {props.children}
   
     </CSSTransition>
     
   </>
 );
}
export default Modal;