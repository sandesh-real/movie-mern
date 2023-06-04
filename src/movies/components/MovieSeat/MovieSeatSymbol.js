import classes from './MovieSeatSymbol.module.css';
const MovieSeatSymbol=()=>{
    return (
      <div className={classes.symbol}>
        <div className={classes.symbolItem}>
          <span
            className={classes.symbolIndicator}
            style={{ background: "black" }}
          ></span>
          <span className={classes.symbolText}>Available</span>
        </div>
        <div className={classes.symbolItem}>
          <span
            className={classes.symbolIndicator}
            style={{ background: "red" }}
          ></span>
          <span className={classes.symbolText}>Sold Out</span>
        </div>
        <div className={classes.symbolItem}>
          <span
            className={classes.symbolIndicator}
            style={{ background: "green" }}
          ></span>
          <span className={classes.symbolText}>Your Seat</span>
        </div>
        <div className={classes.symbolItem}>
          <span
            className={classes.symbolIndicator}
            style={{ background: "grey" }}
          ></span>
          <span className={classes.symbolText}>Unavailable</span>
        </div>
      </div>
    );
}
export default MovieSeatSymbol;