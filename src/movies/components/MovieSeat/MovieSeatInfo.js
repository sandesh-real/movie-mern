import classes from './MovieSeatInfo.module.css';
const MovieSeatInfo=()=>{
    return (
      <div className={classes.seatInfo}>
        <div className={classes.SeatNo}>
          <span className={classes.seatCountText}>No.of seats:</span>
          <span className={classes.seatCountNumber}>0</span>
        </div>
        <div className={classes.ticketCost}>
          <span className={classes.ticketCostText}>Cost</span>
          <span className={classes.ticketCostNumber}>0</span>
        </div>
      </div>
    );
}
export default MovieSeatInfo;