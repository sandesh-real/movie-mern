import Button from "../../Shared/util/Button";
import { HiTicket } from "react-icons/hi";
import classes from './MovieDescription.module.css'
const MovieDescription = (props) => {
  return (
    <div className={`${classes.movieDescription}`} style={props.style}>
      <h1>{props.movie.title}</h1>
      <h2>
        <span>Genre:</span>
        <span>{props.movie.runtime}</span>
      </h2>
      <h2>
        <span>Director:</span>
        <span>{props.movie.directedBy}</span>
      </h2>
      <h2>
        <span>Starring:</span>
        <span>{props.movie.starring}</span>
      </h2>
      <h2>
        <span>Synopsis:</span>
        <span>{props.movie.synopsis}</span>
      </h2>
      <Button
        show={props.show}
        type="link"
        link={`/show-time/${props.movie.id}`}
      >
        <span>
          <HiTicket />
        </span>
        Buy Ticket
      </Button>
    </div>
  );
}
export default MovieDescription;
