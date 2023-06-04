import "./App.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootElement, { getUserLoader ,logoutAction} from "./Shared/pages/RootElement";
import Allmovie,{movieLoader} from "./movies/pages/Allmovie";
import MyTicket from "./Tickets/pages/MyTicket";
import Error from "./Shared/pages/Error";
import ShowTime, { ShowTimeLoader } from "./movies/pages/ShowTime";
import MovieSeat, {
  movieSeatLoader,
  movieSeaterAction,
} from "./movies/pages/MovieSeat";
import BuyTicket, { buyTicketAction } from "./Tickets/pages/BuyTicket";
import TicketRate from "./Tickets/pages/TicketRate";
import Admin from "./movies/pages/admin/Movie";
import Auth ,{authAction}from './users/pages/Auth';
import {checkAuthLoader} from './Shared/util/loader'
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    loader: getUserLoader,
    action: logoutAction,
    id: "user-data",
    errorElement: <Error />,
    children: [
      { path: "", element: <Allmovie />, loader: movieLoader },
      { path: "ticket", element: <MyTicket />, loader: checkAuthLoader },
      { path: "rate", element: <TicketRate /> },
      {
        path: "show-time/:movieId",
        element: <ShowTime />,
        loader: ShowTimeLoader,
      },
      {
        path: "movie-seat",
        element: <MovieSeat />,
        loader: movieSeatLoader,
        action: movieSeaterAction,
      },
      {
        path: "buy-ticket",
        element: <BuyTicket />,
        action: buyTicketAction,
        loader: movieSeatLoader,
      },
      {
        path: "admin",
        element: <Admin />,
       loader: movieLoader 
      },
      { path: "auth", element: <Auth />, action: authAction },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
