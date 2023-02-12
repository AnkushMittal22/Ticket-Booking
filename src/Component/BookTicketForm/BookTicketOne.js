import style from "./BookTicketOne.module.css";

import { actionOne } from "../../store/ticketStore";
import { useDispatch, useSelector } from "react-redux";
const BookTicketOne = () => {
  const dispetch = useDispatch();
  const counter = useSelector((store) => store.numberOfTicket);

  const SeatNum = useSelector((store) => store.seats);
  console.log(counter);

  const ticketHandler = (event) => {
    console.log(event.target.textContent);
    event.preventDefault();
    if (event.target.disabled === false) {
      event.target.className = style.disabled;
      event.target.disabled = true;
    }

    dispetch(actionOne.increment());
    dispetch(actionOne.increseby(500));
    dispetch(actionOne.ticketNumber(event.target.innerText));
  };

  return (
    <div className={style.one}>
      <section>
        <h1>Section A ₹500</h1>

        {Array.from({ length: 30 }, (_, number) => (
          <button
            className={SeatNum.includes(`${number + 1}`) ? style.disabled : ""}
            onClick={ticketHandler}
          >
            {number + 1}
          </button>
        ))}
      </section>
    </div>
  );
};
export default BookTicketOne;
