import { Link } from 'react-router-dom';
import classes from './Button.module.css';
const Button =(props)=>{
    if (props.show){
      if (props.type === "link") {
        return (
          <Link className={classes.button} style={props.style} to={props.link}>
            {props.children}
          </Link>
        );
      }
      return <button onClick={props.onClick} className={classes.button} style={props.style}>{props.children}</button>;
    }
    else{
        return null;
    }

}
export default Button;