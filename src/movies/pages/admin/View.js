import { useLoaderData } from 'react-router-dom';
import Button from '../../../Shared/util/Button';
import classes from './View.module.css';

const View=()=>{
    const movies = useLoaderData();
  
    return <div className={classes.viewWrapper}>
        <h3 className={classes.viewTitle}>Movie view</h3>
        <div className={classes.movieLists}>
         {movies.map((movie)=>{
            return (
              <div className={classes.movieList}>
                <div className={classes.description}>
                  <img
                    src={`http://localhost:5000/${movie.image}`}
                    alt="movieView"
                  />
                  <h4>{movie.title}</h4>
                </div>
                <div className={classes.movieListBtn}>
                  <Button
                    show={true}
                    style={{
                      backgroundColor: "red",
                      color: "#fff",
                      fontSize: "0.7rem",
                      padding: "0.3rem 0.2rem",
                      marginRight:"0.2rem"
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    show={true}
                    style={{
                      backgroundColor: "#000",
                      color: "#ffff",
                      fontSize: "0.7rem",
                      padding: "0.3rem 0.2rem",
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            );
         })}
        </div>
    </div>
}
export default View;