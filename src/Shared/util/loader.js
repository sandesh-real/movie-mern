import { redirect } from "react-router-dom";

export const checkAuthLoader=()=>{
    let token=localStorage.getItem("token");
    if(!token){
        return redirect('/auth')
    }
    return token;
}
export const checkAuth=()=>{
      return localStorage.getItem("token");
}