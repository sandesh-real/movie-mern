import Button from "../../Shared/util/Button";
import { useRouteLoaderData } from "react-router-dom";
import TicketInfo from "../components/TicketInfo";
import classes from "./MyTicket.module.css";

const MyTicket = () => {
  const { user } = useRouteLoaderData("user-data");
 console.log(user)
  return (
    <div className={classes.yourTicketWrapper}>
      <h1 className={classes.yourTicketHeader}>Your Ticket</h1>
      <div className={classes.ticketInfo}>
        {user.ticket.map((item) => {
          return (
            <div key={item.id} className={classes.ticket}>
              <TicketInfo ticket={item} />
              <div className={classes.ticketBtn}>
                <div className={classes.Sharebtn}>
                  <Button show={true}>Share</Button>
                </div>
                <div className={classes.Downloadbtn}>
                  <Button show={true}>Download</Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MyTicket;
