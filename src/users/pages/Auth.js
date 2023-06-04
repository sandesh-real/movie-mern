import {useState} from 'react';
import classes from './Auth.module.css';
import Login from '../componets/Login';
import Signup from '../componets/Signup';
import Button from '../../Shared/util/Button';
import { redirect ,json} from 'react-router-dom';
const Auth=()=>{
    const [changeAuthState,setChangeAuthState]=useState('login');
    const onChangeAuthState=(state)=>{
        setChangeAuthState(state)
    }
    return (
      <div className={classes.authWrapper}>
        <div className={classes.authSwitchBtn}>
         <Button
            onClick={() => onChangeAuthState("login")}
            show={true}
            style={{ marginRight: "0.5rem" }}
          >
            Login
          </Button>
          <Button onClick={() => onChangeAuthState("signup")} show={true}>
            SignUp
          </Button>
        </div>
       {changeAuthState==='login' &&  <Login />}
        {changeAuthState==='signup' &&   <Signup />}
      </div>
    );
}
export default Auth;

export const authAction=async ({request,params})=>{
  const formData=await request.formData();
  const newData={
    email:formData.get('email'),
    password:formData.get('password')
  }
  const isLogin=formData.get('type')
  if(isLogin==='signup'){
    newData.name = formData.get("name");
  }
  try{
    const response=await fetch(`http://localhost:5000/api/users/${isLogin==='login'?'login':'signup'}`,{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(newData)
    });
    const data=await response.json();
    if(!response.ok){
      throw json({message:data.message})
    }
    localStorage.setItem("token", data.token);
   return redirect('/')
  }
  catch(err){

  }
}