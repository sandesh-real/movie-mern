import { MdMovie, MdLogin, MdAdminPanelSettings } from "react-icons/md";
import { HiTicket } from "react-icons/hi";
import {BsTicketPerforated} from 'react-icons/bs'
import { Link, useRouteLoaderData, useSubmit } from "react-router-dom";
import classes from "./NavLink.module.css";
const NavLink = (props) => {
  const submit = useSubmit();
  const onLogoutHandler=()=>{
  submit(null,{method:"POST"})
  }
    const userInfo = useRouteLoaderData("user-data");
   
  return (
    <>
      <div className={classes.navigationNav}>
        <li className={classes.mainNavItem}>
          <a href="/">
            <span className={classes.navLinkIcon}>
              <MdMovie />
            </span>
            Movies
          </a>
        </li>
        {userInfo?.token && (
          <li className={classes.mainNavItem}>
            <Link to="/ticket">
              {" "}
              <span className={classes.navLinkIcon}>
                <HiTicket />
              </span>
              Your Ticket
            </Link>
          </li>
        )}
        <li className={classes.mainNavItem}>
          <Link to="/rate">
            <span className={classes.navLinkIcon}>
              <BsTicketPerforated />
            </span>
            Ticket Rate
          </Link>
        </li>
        <li className={classes.mainNavItem}>
          <Link to="/admin">
            {" "}
            <span className={classes.navLinkIcon}>
              <MdAdminPanelSettings />
            </span>
            Admin
          </Link>
        </li>
      </div>
      <div className={classes.authNav}>
        <li className={classes.mainNavItem}>
          {!userInfo.token && (
            <Link to="/auth">
              <span className={classes.navLinkIcon}>
                <MdLogin />
              </span>
              <span className={classes.authName}>Auth</span>
            </Link>
          )}
          {userInfo?.token && (
            <a method="POST" onClick={onLogoutHandler}>
              <span className={classes.navLinkIcon}>
                <MdLogin />
              </span>
              <span className={classes.authName}>Logout</span>
            </a>
          )}
        </li>
      </div>
    </>
  );
};
export default NavLink;
