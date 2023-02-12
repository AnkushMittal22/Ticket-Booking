import style from "./BookTicketTwo.module.css";
import { actionOne } from "../../store/ticketStore";
import { useDispatch, useSelector } from "react-redux";
const BookTicketTwo = () => {
  const dispetch = useDispatch();
  const SeatNum = useSelector((store) => store.seats);
  const ticketHandlerTwo = (event) => {
    event.preventDefault();

    if (event.target.disabled === false) {
      event.target.className = style.disabled;
      event.target.disabled = true;
    }

    dispetch(actionOne.increment());
    dispetch(actionOne.increseby(250));
    dispetch(actionOne.ticketNumber(event.target.innerText));
  };
  return (
    <div className={style.two}>
      <section>
        <h1>Section B ₹250</h1>
        {Array.from({ length: 40 }, (_, number) => (
          <button
            className={SeatNum.includes(`${number + 31}`) ? style.disabled : ""}
            onClick={ticketHandlerTwo}
          >
            {number + 31}
          </button>
        ))}
      </section>
    </div>
  );
};
export default BookTicketTwo;
