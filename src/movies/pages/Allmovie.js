import MoviePoster from "../components/MoviePoster";
import { json ,useLoaderData} from "react-router-dom";
import classes from './Allmovie.module.css';

const Allmovie = () => {
  const movies = useLoaderData();
    console.log(movies)
  return (
    <>
      <div className={classes.nowShowing}>
        <h1 className={classes.movieStatus}>Now Showing</h1>
        <div className={classes.movieWrapper}>
          {movies.map((movie) => {
            if(movie.status==='now-showing')
            {

              return <MoviePoster key={movie.id} movie={movie} />
            }
          })}
        </div>
      </div>
      <div className={classes.nextChange}>
        <h1 className={classes.movieStatus}>Next Change</h1>
        <div className={classes.movieWrapper}>
          {movies.map((movie) => {
               if (movie.status === "next-change") {
                 return <MoviePoster key={movie.id} movie={movie} />;
               }
          })}
        </div>
      </div>
      <div className={classes.commingSoon}>
        <h1 className={classes.movieStatus}>Comming Soon</h1>
        <div className={classes.movieWrapper}>
          {movies.map((movie) => {
             if (movie.status === "comming-soon") {
               return <MoviePoster key={movie.id} movie={movie} />;
             }
          })}
        </div>
      </div>
    </>
  )
}
export default Allmovie;

export const movieLoader= async ({request,params})=>{
   let token = localStorage.getItem("token");
  try{
    const response = await fetch("http://localhost:5000/api/movies", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data=await response.json();
 
    if(!response.ok){
      return data.movies= []
    }
    return data.movies
  }
  catch(err){
    throw json({message:"Something went wrong"},{status:500})
  }
}