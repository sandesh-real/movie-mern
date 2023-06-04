import { useState } from "react";
import classes from "./Login.module.css";
import Button from "../../Shared/util/Button";
import { useSubmit } from "react-router-dom";
const Login = () => {
  const submit = useSubmit();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const onChangeStateHandler = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password.trim() === "") {
      return;
    }
    submit(
      { email: email, password: password, type: "login" },
      { method: "POST" }
    );
  };

  return (
    <div className={classes.loginWrapper}>
      <div className={classes.formWrapper}>
        <h1 className={classes.loginHeader}>Login</h1>
        <form className={classes.form} onSubmit={onSubmitHandler}>
          <div className={classes.emailWrapper}>
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              type="email"
              name="email"
              id="email"
              onChange={onChangeStateHandler}
            />
          </div>
          <div className={classes.passwordWrapper}>
            <label htmlFor="password">Password:</label>
            <input
              value={password}
              type="password"
              name="password"
              id="password"
              onChange={onChangeStateHandler}
            />
          </div>
          <Button style={{ width: "100%" }} show={true}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Login;
