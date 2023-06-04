import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import classes from "./MoviePoster.module.css";
import Modal from "../../Shared/components/modal";

import MovieDescription from "./MovieDescription";
const MoviePoster = (props) => {
  
  const [openModal, setOpenModal] = useState(false);
  const onOpenModalHandler = () => {
   
    setOpenModal(true);
  };
  const onCloseModalHandler = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Modal onCancel={onCloseModalHandler} openModal={openModal}>
        <div className={classes.topClass}>
          <span className={classes.closeModal} onClick={onCloseModalHandler}>
            <AiFillCloseCircle />
          </span>
          <div className={classes.modalWrapper}>
            <div className={classes.trailer}>
              <iframe
                className={classes.iframe}
                src={props.movie.trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <MovieDescription show={true} movie={props.movie} />
          </div>
        </div>
      </Modal>

      <div className={classes.mainMoviePoster} onClick={onOpenModalHandler}>
        <div className={classes.mainMoviePosterImage}>
          <img
            src={`http://localhost:5000/${props.movie.image}`}
            alt={props.movie.title}
          />
        </div>
        <h1 className={`${classes.movieTitle}`}>{props.movie.title}</h1>
      </div>
    </>
  );
}
export default MoviePoster;
