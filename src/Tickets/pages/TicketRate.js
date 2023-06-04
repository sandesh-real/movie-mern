import classes from "./TicketRate.module.css";
const TicketRate = () => {
  return (
    <div className={classes.wrapper}> 
      <h1 className={classes.ticketHeading}>Ticket Rate</h1>
      <p className={classes.note}>Extra 30 rupe for 3D</p>
      <div className={classes.rateWrapper}>
        <div className={classes.rateBody}>
          <span className={classes.rateText}>
            Morning Sunday-Saturday(6am-9am):
          </span>
          <span className={classes.amount}> Rs 150(2D)/ Rs 180(3D)</span>
        </div>
        <div className={classes.rateBody}>
          <span className={classes.rateText}>Sunday-Monday regular:</span>
          <span className={classes.amount}>Rs 250(2D) / Rs 280(3D)</span>
        </div>
        <div className={classes.rateBody}>
          <span className={classes.rateText}>Wednesday (All Day):</span>
          <span className={classes.amount}>Rs 200(2D) / Rs 230(3D)</span>
        </div>
      </div>
    </div>
  );
};
export default TicketRate;
