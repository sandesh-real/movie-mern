import MyNavigation from '../components/MyNavigation';
import classes from './Error.module.css';
const Error = () => {
  return (
    <>
    <MyNavigation/>
      <h1 className={classes.errorTitle}>Something went wrong!!!</h1>
      <p className={classes.errorMessage}>Please try again.</p>
    </>
  );
};
export default Error;
