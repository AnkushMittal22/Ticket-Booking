import BookTicketOne from "../Component/BookTicketForm/BookTicketOne";
import BookTicketTwo from "../Component/BookTicketForm/BookTicketTwo";
import BookTicketThree from "../Component/BookTicketForm/BookTicketThree";
import style from "./BookTicket.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionOne } from "../store/ticketStore";

const BookTicket = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.numberOfTicket);
  const counter1 = useSelector((store) => store.ticketPirce);
  const movieName = useSelector((store) => store.movieTitle);
  const SeatNum = useSelector((store) => store.seats);
  const history = useHistory();
  const addHandler = () => {
    if (counter === 0 || counter1 === 0 || movieName === "" || SeatNum === []) {
      alert("Select Sheet First");
    } else {
      history.push("/bookticket/showtotal/");
    }
  };
  return (
    <div className={style.book}>
      <header>
        <BookTicketOne />
      </header>
      <hr />
      <header>
        <BookTicketTwo />
      </header>
      <hr />
      <header>
        <BookTicketThree />
      </header>

      <div className={style.book_action}>
        {/* <NavLink to={"/bookticket/showtotal/"}> */}
        <button onClick={addHandler}>
          <span>BOOK & PAY =</span> {counter1}{" "}
        </button>
        {/* </NavLink> */}
      </div>
    </div>
  );
};

export default BookTicket;
