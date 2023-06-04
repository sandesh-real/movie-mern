import classes from "./TicketInfo.module.css";
import { getFormatedDate } from "../../Shared/util/getDateData";
const TicketInfo = ({ ticket }) => {
  return (
    <>
      <p className={classes.movieTitle}>
        <span>Movie: </span>
        {ticket.movieTitle}
      </p>
      <p className={classes.movieDtate}>
        <span>Date: </span>
        {getFormatedDate(ticket.ticketDate)}
      </p>
      <p className={classes.movieTime}>
        <span>Time: </span>
        {ticket.time}
      </p>
      <p className={classes.movieTime}>
        <span>Time: </span>
        {ticket.type}
      </p>
      <div className={classes.seats}>
        <span>Seats: </span>
        {ticket.seats.map((seat) => {
          return (
            <span>
              {seat.seatAlph}:{seat.seatNum}{" "}
            </span>
          );
        })}
      </div>
    </>
  );
};
export default TicketInfo;
