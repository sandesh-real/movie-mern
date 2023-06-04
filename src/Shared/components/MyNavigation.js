import { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import classes from './MyNavigation.module.css';
import {AiFillCloseCircle,AiOutlineMenu} from 'react-icons/ai'
import {CSSTransition} from 'react-transition-group'
import Backdrop from '../util/backdrop';
import "./transition.css";
const MyNavigation = () => {
  const [openNavigation,setOpenNavigation]=useState(false);
     const nodeRef = useRef(null);

  const onCloseNavigation=()=>{
  setOpenNavigation(false)
  }
   const onOpenNavigation = () => {
     setOpenNavigation(true);
   };
  return (
    <>
      <div className={classes.menubar}>
        <span onClick={onOpenNavigation}>
          <AiOutlineMenu />
        </span>
      </div>
      {openNavigation && <Backdrop onClick={onCloseNavigation} />}
      <div className={classes.mainNav}>
        <div className={classes.Logo}>
          <a href="/" style={{ textDecoration: "none" }}>
            <h1>MovieTime</h1>
          </a>
        </div>
        <div className={classes.navigationMenu}>
          <ul>
            <NavLink />
          </ul>
        </div>
      </div>

      <CSSTransition
        in={openNavigation}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames='modal'
        nodeRef={nodeRef}
      >
        <div className={classes.mobileNav} onClick={onCloseNavigation} ref={nodeRef}>
          <span onClick={onCloseNavigation} className={classes.CloseIcon}>
            <AiFillCloseCircle />
          </span>
          <div className={classes.Logo}>
            <h1>MovieTime</h1>
          </div>
          <div className={classes.navigationMenu}>
            <ul>
              <NavLink />
            </ul>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default MyNavigation;
