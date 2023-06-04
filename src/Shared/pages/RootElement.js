import { Outlet,json, redirect } from "react-router-dom";
import MyNavigation from "../components/MyNavigation";
import Footer from "./Footer";
import classes from './RootElement.module.css';
const RootElement=()=>{
    return <div className={classes.rootElement}>
        <div className={classes.upper}>

    <MyNavigation/>
    <main className={classes.main}>
        <Outlet/>
    </main>
        </div>
    <Footer/>
    </div>
}
export default RootElement;

export const getUserLoader=async ({request,params})=>{
    let token = localStorage.getItem("token");
    try{
       const response = await fetch("http://localhost:5000/api/users/user", {
         headers: {
           authorization: `Bearer ${token}`,
         },
       });
       const data=await response.json();
       
       if(!response.ok){
        return { user:'', token:'' };
       }
       
       if(!token){
        token=''
       }
     
       return {user:data.user,token:token};
    }
    catch(err){
        throw json({message:"Something went wrong"},{status:500})
    }
}

export const logoutAction=()=>{
    localStorage.removeItem('token');
    return redirect('/auth')
}