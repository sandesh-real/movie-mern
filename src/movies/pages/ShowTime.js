import { useState } from "react";
import {  json, useLoaderData, redirect } from "react-router-dom";
import classes from "./ShowTime.module.css";
import MovieDescription from "../components/MovieDescription";
import { checkAuth } from "../../Shared/util/loader";
const ShowTime = () => {
  const dataMovie = useLoaderData();
  const [movieDay, setMovieDay] = useState(dataMovie.movieshowtime[0].day);

  const onChangeMovieDayHandler = (val) => {
    
    setMovieDay(val);
  };

  //   const singleMovie = DUMMY_MOVIE.find((movie) => movie.id === movieId);

  return (
    <>
      <div className={classes.ShowTimeWrapper}>
        <div className={classes.imageDescription}>
          <div className={classes.showTimeImage}>
            <img src={`http://localhost:5000/${dataMovie.image}`} alt="posterImage" />
          </div>
          <div>
            <MovieDescription
              show={false}
              style={{ color: "#000", width: "100%" }}
              movie={dataMovie}
            />
          </div>
        </div>
        <div className={classes.showTimeNav}>
          <ul className={classes.navlists}>
            {dataMovie.movieshowtime.map((item) => {
              return (
                <li
                  key={item.id}
                  className={classes.navLink}
                  onClick={() => onChangeMovieDayHandler(item.day)}
                >
                  {item.day.toUpperCase()}
                </li>
              );
            })}
          </ul>
          <div className={classes.showTableTime}>
            <span>Show:</span>
            {dataMovie.movieshowtime.map((item) => {
              if (item.day === movieDay) {
                return item.time.map((time) => {
                  return (
                    <a
                      key={time}
                      href={`/movie-seat?movieId=${dataMovie.id}&day=${item.day}&time=${time}`}
                    >
                      {time}
                    </a>
                  );
                });
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default ShowTime;

export const ShowTimeLoader = async ({ request, params }) => {
   let newToken= checkAuth();
   if (!newToken) {
     return redirect("/auth");
   }
  const movieId = params.movieId;

  try {
    const response = await fetch(
      `http://localhost:5000/api/movies/movie/${movieId}`
    );
    const data = await response.json();
    if (!response.ok) {
      return (data.movie = "");
    }
    return data.movie;
  } catch (err) {
    throw json({ message: "Something went wrong" }, { status: 500 });
  }
};
