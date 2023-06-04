import { useState } from 'react';
import classes from './Payment.module.css';
import esewa from '../../images/esewa.png';
import khalti from '../../images/khalti.jpg'
import Modal from '../../Shared/components/modal';
import Button from '../../Shared/util/Button';

const Payment = ({ movie, theater,onClick }) => {
 
  const [openModal, setOpenModal] = useState(false);
  const onChangeOpenHandler = () => {
    setOpenModal(true);
  };
  const onChangeCloseHandler = () => {
    setOpenModal(false);
  };
  const onBuyHandler = () => {
    onClick({
      movieId: movie.id,
      movieTitle: movie.title,
      ticketDate: theater.date,
      time: theater.time,
      day:theater.day
    });
  };
  return (
    <>
      <Modal openModal={openModal} onCancel={onChangeCloseHandler}>
        <div className={classes.Wrapper}>
          <div className={classes.paymentConfirm}>
            <div className={classes.message}>
              <p>Are you sure want to buy tickets?</p>
            </div>
            <div className={classes.paymentConfirmBtn}>
              <Button
                onClick={onBuyHandler}
                show={true}
                style={{ marginRight: "0.2rem" }}
              >
                Buy
              </Button>
              <Button onClick={onChangeCloseHandler} show={true}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <div onClick={onChangeOpenHandler} className={classes.esewaWrapper}>
        <img src={esewa} alt="esewa" />
      </div>
      <div onClick={onChangeOpenHandler} className={classes.khaltiWrapper}>
        <img src={khalti} alt="khalti" />
      </div>
    </>
  );
};
export default Payment;