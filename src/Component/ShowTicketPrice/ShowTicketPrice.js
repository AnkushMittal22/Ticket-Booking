import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import style from "./ShowTicketPrice.module.css";

const ShowTicketPrice = () => {
  const history = useHistory();
  const ticket = useSelector((store) => store.numberOfTicket);
  const ticketPirce = useSelector((store) => store.ticketPirce);
  const movieName = useSelector((store) => store.movieTitle);
  const SeatNum = useSelector((store) => store.seats);
  const name = useSelector((store) => store.name);
  console.log(SeatNum);
  const backHanlder = () => {
    history.push("/bookticket");
    // window.location.reload(true);
  };

  const confirmHandler = () => {
    alert("Ticket Confirmed");
  };
  return (
    <div className={style.show}>
      <div>
        <h2>No Of Ticket:</h2>
        <p>{ticket}</p>
      </div>
      <hr />
      <div>
        <h2>Movie Name:</h2>
        <p>{movieName}</p>
      </div>
      <hr />
      <div>
        <h2>SeatNumber:</h2>
        <p>{SeatNum + ""}</p>
      </div>
      <hr />
      <div>
        <h2>Total Amount:</h2>
        <p>₹{ticketPirce}</p>
      </div>
      <hr />

      <div>
        <button onClick={confirmHandler}>Confirm</button>
        {/* <Link to={"/bookticket"}> */}
        <button type="submit" onClick={backHanlder}>
          Back
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ShowTicketPrice;
