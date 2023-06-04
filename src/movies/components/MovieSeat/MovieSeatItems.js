import { MdEventSeat } from "react-icons/md";
import classes from "./MovieSeatItems.module.css";
const MovieSeatItems = ({ item, onSelectTicketHandler }) => {
  return (
    <div className={classes.seatRow}>
      <span className={classes.seatAlpha}>{item.seatAlph}</span>
      {item.setNum.map((seat) => {
        return (
          <span
            onClick={() =>
              onSelectTicketHandler({
                seatAlph: item.seatAlph,
                seatNum: seat.num,
              })
            }
            className={classes.seatNum}
          >
            <span className={classes.seatLogo} style={{ color: seat.color }}>
              <MdEventSeat />
            </span>
            <span className={classes.setNumAct}>{seat.num}</span>
          </span>
        );
      })}
    </div>
  );
};
export default MovieSeatItems;
