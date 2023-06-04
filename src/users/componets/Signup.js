import { useState } from "react";
import classes from "./Signup.module.css";
import Button from "../../Shared/util/Button";
import { useSubmit } from "react-router-dom";
const Signup = () => {
  const submit = useSubmit();
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [isEmailValid, setIsEmailValid] = useState(true);
     const [isPasswordValid, setIsPasswordValid] = useState(true);
     const onChangeStateHandler = (event) => {
       if (event.target.name === "email") {
         setEmail(event.target.value);
       }
       else if(event.target.name==='name'){
        setName(event.target.value);
       }
        else {
         setPassword(event.target.value);
       }
     };
     const onSubmitHandler = (e) => {
       e.preventDefault();
       if (password.trim() === "") {
         return;
       }
        submit({name:name, email: email, password: password,type:"signup" }, { method: "POST" });
     };

  return (
    <div className={classes.signUpWrapper} onSubmit={onSubmitHandler}>
      <div className={classes.formWrapper}>
        <h1 className={classes.signUpHeader}>Sign Up</h1>
        <form className={classes.form}>
          <div className={classes.nameWrapper}>
            <label htmlFor="name">Name:</label>
            <input
              type="name"
              name="name"
              id="name"
              value={name}
              onChange={onChangeStateHandler}
            />
          </div>
          <div className={classes.emailWrapper}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={onChangeStateHandler}
            />
          </div>
          <div className={classes.passwordWrapper}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={onChangeStateHandler}
            />
          </div>
          <Button style={{ width: "100%" }} show={true}>
            SignUp
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Signup;

