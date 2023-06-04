import { useState, useEffect } from "react";
import { json,redirect, useLoaderData, useSubmit,useRouteLoaderData } from "react-router-dom";
import MovieSeatItems from "../components/MovieSeat/MovieSeatItems";
import MovieSeatSymbol from "../components/MovieSeat/MovieSeatSymbol";
import MovieSeatInfo from "../components/MovieSeat/MovieSeatInfo";
import MovieSeatButtons from "../components/MovieSeat/MovieSeatButtons";
import classes from "./MovieSeat.module.css";
import { getMonth } from "../../Shared/util/getDateData";
import {checkAuth} from '../../Shared/util/loader'
const seats = [
  {
    seatAlph: "A",
    setNum: [
      { num: 1, color: "" },
      { num: 2, color: "" },
      { num: 3, color: "" },
      { num: 4, color: "" },
      { num: 5, color: "" },
      { num: 6, color: "" },
      { num: 7, color: "" },
      { num: 8, color: "" },
      { num: 9, color: "" },
      { num: 10, color: "" },
      { num: 11, color: "" },
      { num: 12, color: "" },
      { num: 13, color: "" },
      { num: 14, color: "" },
    ],
  },
  {
    seatAlph: "B",
    setNum: [
      { num: 1, color: "" },
      { num: 2, color: "" },
      { num: 3, color: "" },
      { num: 4, color: "" },
      { num: 5, color: "" },
      { num: 6, color: "" },
      { num: 7, color: "" },
      { num: 8, color: "" },
      { num: 9, color: "" },
      { num: 10, color: "" },
      { num: 11, color: "" },
      { num: 12, color: "" },
      { num: 13, color: "" },
      { num: 14, color: "" },
    ],
  },
  {
    seatAlph: "C",
    setNum: [
      { num: 1, color: "" },
      { num: 2, color: "" },
      { num: 3, color: "" },
      { num: 4, color: "" },
      { num: 5, color: "" },
      { num: 6, color: "" },
      { num: 7, color: "" },
      { num: 8, color: "" },
      { num: 9, color: "" },
      { num: 10, color: "" },
      { num: 11, color: "" },
      { num: 12, color: "" },
      { num: 13, color: "" },
      { num: 14, color: "" },
    ],
  },
  {
    seatAlph: "D",
    setNum: [
      { num: 1, color: "" },
      { num: 2, color: "" },
      { num: 3, color: "" },
      { num: 4, color: "" },
      { num: 5, color: "" },
      { num: 6, color: "" },
      { num: 7, color: "" },
      { num: 8, color: "" },
      { num: 9, color: "" },
      { num: 10, color: "" },
      { num: 11, color: "" },
      { num: 12, color: "" },
      { num: 13, color: "" },
      { num: 14, color: "" },
    ],
  },
  {
    seatAlph: "E",
    setNum: [
      { num: 1, color: "" },
      { num: 2, color: "" },
      { num: 3, color: "" },
      { num: 4, color: "" },
      { num: 5, color: "" },
      { num: 6, color: "" },
      { num: 7, color: "" },
      { num: 8, color: "" },
      { num: 9, color: "" },
      { num: 10, color: "" },
      { num: 11, color: "" },
      { num: 12, color: "" },
      { num: 13, color: "" },
      { num: 14, color: "" },
    ],
  },
  {
    seatAlph: "F",
    setNum: [
      { num: 1, color: "" },
      { num: 2, color: "" },
      { num: 3, color: "" },
      { num: 4, color: "" },
      { num: 5, color: "" },
      { num: 6, color: "" },
      { num: 7, color: "" },
      { num: 8, color: "" },
      { num: 9, color: "" },
      { num: 10, color: "" },
      { num: 11, color: "" },
      { num: 12, color: "" },
      { num: 13, color: "" },
      { num: 14, color: "" },
    ],
  },
  {
    seatAlph: "G",
    setNum: [
      { num: 1, color: "" },
      { num: 2, color: "" },
      { num: 3, color: "" },
      { num: 4, color: "" },
      { num: 5, color: "" },
      { num: 6, color: "" },
      { num: 7, color: "" },
      { num: 8, color: "" },
      { num: 9, color: "" },
      { num: 10, color: "" },
      { num: 11, color: "" },
      { num: 12, color: "" },
      { num: 13, color: "" },
      { num: 14, color: "" },
    ],
  },
  {
    seatAlph: "H",
    setNum: [
      { num: 1, color: "" },
      { num: 2, color: "" },
      { num: 3, color: "" },
      { num: 4, color: "" },
      { num: 5, color: "" },
      { num: 6, color: "" },
      { num: 7, color: "" },
      { num: 8, color: "" },
      { num: 9, color: "" },
      { num: 10, color: "" },
      { num: 11, color: "" },
      { num: 12, color: "" },
      { num: 13, color: "" },
      { num: 14, color: "" },
    ],
  },
  {
    seatAlph: "I",
    setNum: [
      { num: 1, color: "" },
      { num: 2, color: "" },
      { num: 3, color: "" },
      { num: 4, color: "" },
      { num: 5, color: "" },
      { num: 6, color: "" },
      { num: 7, color: "" },
      { num: 8, color: "" },
      { num: 9, color: "" },
      { num: 10, color: "" },
      { num: 11, color: "" },
      { num: 12, color: "" },
      { num: 13, color: "" },
      { num: 14, color: "" },
    ],
  },
  {
    seatAlph: "J",
    setNum: [
      { num: 1, color: "" },
      { num: 2, color: "" },
      { num: 3, color: "" },
      { num: 4, color: "" },
      { num: 5, color: "" },
      { num: 6, color: "" },
      { num: 7, color: "" },
      { num: 8, color: "" },
      { num: 9, color: "" },
      { num: 10, color: "" },
      { num: 11, color: "" },
      { num: 12, color: "" },
      { num: 13, color: "" },
      { num: 14, color: "" },
    ],
  },
  {
    seatAlph: "K",
    setNum: [
      { num: 1, color: "" },
      { num: 2, color: "" },
      { num: 3, color: "" },
      { num: 4, color: "" },
      { num: 5, color: "" },
      { num: 6, color: "" },
      { num: 7, color: "" },
      { num: 8, color: "" },
      { num: 9, color: "" },
      { num: 10, color: "" },
      { num: 11, color: "" },
      { num: 12, color: "" },
      { num: 13, color: "" },
      { num: 14, color: "" },
    ],
  },
];
const MovieSeat = () => {
  const { movie, theater } = useLoaderData();
  const {user} = useRouteLoaderData("user-data");

  const newTicket=user.ticket.find((item)=>{
    return item.movieTitle === movie.title && item.time === theater.time && item.ticketDate===theater.date && item.day===theater.day;
  })

  const [selectedTicket, setSelectedTicket] = useState(newTicket?.seats ||[]);
  useEffect(()=>{
  
    let temp=[]
 if (selectedTicket.length > 0) {
    temp=[...selectedTicket]
      selectedTicket.forEach((item) => {
        for (let i = 0; i < seats.length; i++) {
          if (item.seatAlph === seats[i].seatAlph) {
            seats[i].setNum[item.seatNum - 1].color = "green";

            break;
          }
        }
      });
     
    }
    setSelectedTicket(temp)
    
  },[])

  const submit = useSubmit();
  const onSelectTicketHandler = (data) => {
    let findTik;
    if (selectedTicket.length > 0) {
      findTik = selectedTicket.find((item) => {
        return item.seatAlph === data.seatAlph && item.seatNum === data.seatNum;
      });

      if (findTik) {
        for (let i = 0; i < seats.length; i++) {
          if (findTik.seatAlph === seats[i].seatAlph) {
            if (seats[i].setNum[findTik.seatNum - 1].color === "green") {
              seats[i].setNum[findTik.seatNum - 1].color = "";
            }
            break;
          }
        }
      }
    }

    const findtTickets = selectedTicket.filter(
      (item) => item.seatAlph !== data.seatAlph || item.seatNum !== data.seatNum
    );

    const newDAta = { ...data };
    const temp = [...findtTickets];
    if (!findTik) {
      temp.push(newDAta);
    }

    if (temp.length > 0) {
      temp.forEach((item) => {
        for (let i = 0; i < seats.length; i++) {
          if (item.seatAlph === seats[i].seatAlph) {
            seats[i].setNum[item.seatNum - 1].color = "green";

            break;
          }
        }
      });
    }

    submit(
      {
        userId: "645a3458602f0457bbfea545",
        ticket: JSON.stringify({
          ticketDate: theater.date,
          movieTitle: movie.title,
          type: "2D",
          time: theater.time,
          seats: temp,
          price: 600,
          isPaid:false,
          day:theater.day,
        }),
      },
      { method: "POST" }
    );
    setSelectedTicket(temp);
  };

  theater.soldTicket.forEach((item) => {
    for (let i = 0; i < seats.length; i++) {
      if (item[seats[i].seatAlph]) {
        seats[i].setNum[item[seats[i].seatAlph] - 1].color = "red";
        break;
      }
    }
  });

  return (
    <div className={classes.movieSeatWrapper}>
      <div className={classes.movieDescription}>
        <div className={classes.movieDesUpper}>
          <div className={classes.titleDes}>
            <h1 className={classes.movieTitle}>{movie.title}</h1>
            <p className={classes.movieRuntime}>
              <span className={classes.movieRuntimeText}>Runtime:</span>
              <span className={classes.movieRuntimeText}>{movie.runtime}</span>
            </p>
          </div>
          <div className={classes.timeDate}>
            <p>
              Sat {new Date(theater.date).getDate()} {getMonth(theater.date)}
            </p>
            <span>{theater.time}</span>
          </div>
        </div>
        <div className={classes.lowerDesc}>
          <p>
            Please Note: Full ticket price will be charged for children above 3
            feet.
          </p>
          <p className={classes.timeLeft}>Time left to buy ticket </p>
        </div>
      </div>
      <MovieSeatInfo />

      <div className={classes.seatsWrapper}>
        <div className={classes.seatsContainer}>
          {seats.map((item) => {
            return (
              <>
                <MovieSeatItems
                  selectedTicket={selectedTicket}
                  onSelectTicketHandler={onSelectTicketHandler}
                  item={item}
                />
              </>
            );
          })}
        </div>
      </div>
      <p className={classes.screen}>Screen side</p>
      <MovieSeatSymbol />
      <MovieSeatButtons movie={movie} theater={theater} />
    </div>
  );
};
export default MovieSeat;

export const movieSeatLoader = async ({ request, params }) => {
  
     let newToken = checkAuth();
     if (!newToken) {
       return redirect("/auth");
     }
  const url = new URL(request.url);
  const movieId = url.searchParams.get("movieId");
  const time = url.searchParams.get("time");
  const day = url.searchParams.get("day");

  try {
    const url1 = fetch(`http://localhost:5000/api/movies/movie/${movieId}`);
    const url2 = fetch(
      `http://localhost:5000/api/theater?movieId=${movieId}&time=${time}&day=${day}`
    );
    const [response1, response2] = await Promise.all([url1, url2]);

    const data1 = await response1.json();
    const data2 = await response2.json();

    if (!response1.ok || !response2.ok) {
      data1.movie = "";
      data2.theater = "";
    }
    return { movie: data1.movie, theater: data2.theater };
  } catch (err) {
    throw json({ message: "Something went wrong" }, { status: 500 });
  }
};
export const movieSeaterAction = async ({ request, params }) => {
    let token = localStorage.getItem("token");
  const newFormData = await request.formData();
  const newData = {
    ticket: JSON.parse(newFormData.get("ticket")),
  };

  try {
    const response = await fetch("http://localhost:5000/api/users/ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newData),
    });
    const data=await response.json();
    if (!response.ok) {
      return;
    }
    return data.message;
  } catch (err) {
    throw json({ message: "Something went wrong" }, { status: 500 });
  }
};
