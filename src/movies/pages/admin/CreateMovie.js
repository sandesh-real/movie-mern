import { useRef, useState, useEffect } from "react";
import {useRouteLoaderData,useSubmit} from 'react-router-dom';
import Button from "../../../Shared/util/Button";
import classes from "./CreateMovie.module.css";
const CreateMovie = () => {
   const { token } = useRouteLoaderData("user-data");
   const submit=useSubmit();
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [showTimeHr, setShowTimeHr] = useState();
  const [showTimeMin, setShowTimeMin] = useState();
  const [formData, setFormData] = useState({
    title: "",
    releasedate: "",
    directedBy: "",
    starring: "",
    genre: "",
    runtime: "",
    status: "",
    image: "",
    trailer: "",
    movieshowtime: [],
    synopsis: "",
  });

  const filePickerRef = useRef();
  useEffect(() => {
    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);
  const onInputHandler = (event, type) => {
     event.preventDefault()
  
    if (type === "movieshowtime") {
        if (formData.movieshowtime.length<3){
          setFormData((oldData) => {
            const newOldData = [...oldData.movieshowtime];
            newOldData.push(`${showTimeHr}:${showTimeMin}`);
            const newData = {
              ...oldData,
              movieshowtime: newOldData,
            };
            return newData;
          });
        }
    } else {
      setFormData((oldData) => {
        const newData = {
          ...oldData,
          [event.target.name]: event.target.value,
        };
        return newData;
      });
    }
  };

  const pickedHandler = (event) => {
    let pickedFile;
    if (event.target.files || event.target.files.length === 1) {
      pickedFile = event.target.files[0];

      setFile(pickedFile);

    }
  };
  const imageClickHandler =  (e) => {
    e.preventDefault();
    filePickerRef.current.click();
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let newFormData = { ...formData };
    
    newFormData.image = file;
  
    const getFormData=new FormData();

    getFormData.append("title", newFormData.title);
    getFormData.append("releasedate", newFormData.releasedate);
    getFormData.append("directedBy", newFormData.directedBy);
    getFormData.append("starring", newFormData.starring);
    getFormData.append("genre", newFormData.genre);
    getFormData.append("runtime", newFormData.runtime);
    getFormData.append("status", newFormData.status);
    getFormData.append("image", newFormData.image);
    getFormData.append("trailer", newFormData.trailer);
    getFormData.append(
      "movieshowtime",
      JSON.stringify(newFormData.movieshowtime)
    );
    getFormData.append("synopsis", newFormData.synopsis);
 
    try {
     const response = await fetch("http://localhost:5000/api/movies/", {
       method: "POST",
       headers: {
         authorization: `bearer ${token}`,
       },
       body: getFormData
     });
     if(!response.ok){

     }
     submit({data:true},{method:"POST"})

    } catch (err) {
    submit({ message: "Movie Cannot created" }, { method: "POST" });
    }
  };
  const onShowTimeHandler = (e) => {
    if (e.target.name === "showtimeHr") {
      
      setShowTimeHr(e.target.value);
    } else {
      setShowTimeMin(e.target.value);
    }
  };
  return (
    <div className={classes.createMovieWrapper}>
      <h3 className={classes.createMovieTitle}>Create Movie</h3>
      <form>
        <div className={classes.titleWrapper}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            onChange={onInputHandler}
            name="title"
            id="title"
            value={formData.title}
          />
        </div>
        <div className={classes.releaseDateWrapper}>
          <label htmlFor="releasedate">Release Date</label>
          <input
            type="date"
            onChange={onInputHandler}
            name="releasedate"
            id="releasedate"
            value={formData.date}
          />
        </div>
        <div className={classes.directedByWrapper}>
          <label htmlFor="directedBy">Directed By:</label>
          <input
            type="text"
            onChange={onInputHandler}
            name="directedBy"
            id="directedBy"
            value={formData.directedBy}
          />
        </div>
        <div className={classes.starringWrapper}>
          <label htmlFor="starring">Starring:</label>
          <input
            type="text"
            onChange={onInputHandler}
            name="starring"
            id="starring"
            value={formData.starring}
          />
        </div>
        <div className={classes.genreWrapper}>
          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            onChange={onInputHandler}
            name="genre"
            id="genre"
            value={formData.genre}
          />
        </div>
        <div className={classes.runtimeWrapper}>
          <label htmlFor="runtime">Runtime:</label>
          <input
            type="text"
            onChange={onInputHandler}
            name="runtime"
            id="runtime"
            value={formData.runtime}
          />
        </div>
        <div className={classes.statusWrapper}>
          <label htmlFor="status">Status:</label>
          <select name="status" value={formData.status} onChange={onInputHandler}>
            <option disabled>Default</option>
            <option value='now-showing'>Now Showing</option>
            <option value='coming soon'>Comming Soon</option>
          </select>
          {/* <input
            type="text"
            onChange={onInputHandler}
            name="status"
            id="status"
            value={formData.status}
          /> */}
        </div>
        <div className={classes.imageWrapper}>
          <label htmlFor="image">Poster:</label>
          <input
            type="file"
            name="image"
            id="image"
            ref={filePickerRef}
            onChange={pickedHandler}
            style={{ display: "none" }}
          />

          {previewUrl && (
            <div className={classes.postImg}>
              <img src={previewUrl} alt="poster" />
            </div>
          )}
          <div className={classes.imagePickerBtn}>
            <Button
              onClick={imageClickHandler}
              show={true}
              style={{ margin: "0", backgroundColor: "#000", color: "#fff" }}
            >
              Pick Poster
            </Button>
          </div>
        </div>
        <div className={classes.trailerWrapper}>
          <label htmlFor="trailer">Trailer:</label>
          <input
            type="text"
            onChange={onInputHandler}
            name="trailer"
            id="trailer"
            value={formData.trailer}
          />
        </div>
        <div className={classes.synopsisWrapper}>
          <label htmlFor="synopsis">Synopsis</label>
          <textarea
            type="text"
            onChange={onInputHandler}
            name="synopsis"
            id="synopsis"
            value={formData.synopsis}
          ></textarea>
        </div>
        <div className={classes.showTimeWrapper}>
          <label htmlFor="showtime">Show Time:</label>
          <div className={classes.showTimeAdding}>
            <input
              type="text"
              onChange={onShowTimeHandler}
              name="showtimeHr"
              id="showtimeHr"
              placeholder={"hr"}
              value={showTimeHr}
            />
            <input
              type="text"
              onChange={onShowTimeHandler}
              name="showtimeMin"
              id="showtimeMin"
              placeholder={"min"}
              value={showTimeMin}
            />
            <Button
              show={true}
              onClick={(event) => onInputHandler(event, "movieshowtime")}
              style={{
                fontSize: "0.8rem",
                padding: "0.2rem 0.2rem",
                margin: "0",
                backgroundColor: "#000",
                color: "#fff",
              }}
            >
              Add
            </Button>
          </div>
        </div>
        <div className={classes.hrMin}>
          <ul>
            {formData.movieshowtime.map((item, index) => {
              return <span>{item}, </span>;
            })}
          </ul>
        </div>
        <Button
          onClick={onSubmitHandler}
          style={{ backgroundColor: "#000", color: "#fff" }}
          show={true}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
export default CreateMovie;
