import classes from "./BuyTicket.module.css";
import TicketInfo from "../components/TicketInfo";
import Payment from "../components/Payment";
import Button from '../../Shared/util/Button'

import { useRouteLoaderData, useLoaderData, useSubmit,json, redirect } from "react-router-dom";


const BuyTicket = () => {
    const { movie, theater } = useLoaderData();
     const submit = useSubmit();
  const {user} = useRouteLoaderData('user-data')
    const newTicket = user.ticket.find((item) => {
      return (
        item.movieTitle === movie.title &&
        item.time === theater.time &&
        item.ticketDate === theater.date &&
        item.day===theater.day
      );
    });
    const onSubmit=(data)=>{
     submit(data,{method:"POST"})
    }
  return (
    <>
      <h1 className={classes.YourTicketHeader}>Your ticket info</h1>
      <div className={classes.main}>
        <div className={classes.ticketInfo}>
          <TicketInfo ticket={newTicket} />
        </div>
        <div className={classes.payment}>
          <p className={classes.payWith}>Pay With:</p>
          <div className={classes.paymentLink}>
            <Payment onClick={onSubmit} movie={movie} theater={theater} />
          </div>
        </div>
      </div>
      <div className={classes.btn}>
        <Button show={true}>Cancel</Button>
      </div>
    </>
  );
};
export default BuyTicket;

export const buyTicketAction=async ({request,params})=>{
    let token = localStorage.getItem("token");
  const newFormData=await request.formData();
  const newData = {
    movieId: newFormData.get("movieId"),
    movieTitle: newFormData.get("movieTitle"),
    ticketDate: newFormData.get("ticketDate"),
    time:  newFormData.get("time"),
    day:newFormData.get('day')
  };
  try{
    const response=await fetch('http://localhost:5000/api/theater/theater-user',{
     method:"POST",
     headers:{
      'Content-Type':'application/json',
   
        authorization: `Bearer ${token}`,
   
    },
      body:JSON.stringify(newData)
    })
  
    // const data=await response.json();
    if (!response.ok) {
      return;
    }
    return redirect("/ticket");
  } catch (err) {
    throw json({ message: "Something went wrong" }, { status: 500 });
  }
}