import classes from './MovieSeatButtons.module.css';
import Button from '../../../Shared/util/Button';
const MovieSeatButtons=({movie,theater})=>{
    return (
      <div className={classes.movieSeatButtons}>
        <Button
          type="link"
          link={`/buy-ticket?movieId=${movie.id}&day=${theater.day}&time=${theater.time}`}
          style={{ marginRight: "0.5rem", marginTop: "0" }}
          show={true}
        >
          Buy Ticket
        </Button>
        <Button show={true} style={{ marginTop: "0" }}>
          Cancel
        </Button>
      </div>
    );
}
export default MovieSeatButtons;