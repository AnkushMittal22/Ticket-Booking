import style from "./BookTicketThree.module.css";
import { actionOne } from "../../store/ticketStore";
import { useDispatch, useSelector } from "react-redux";
import { act } from "react-dom/test-utils";

const BookTicketThree = () => {
  const dispetch = useDispatch();
  const SeatNum = useSelector((store) => store.seats);
  const ticketHandlerThree = (event) => {
    console.log(event.target.innerHTML);
    event.preventDefault();
    if (event.target.disabled === false) {
      event.target.className = style.disabled;
      event.target.disabled = true;
    }

    dispetch(actionOne.increment());
    dispetch(actionOne.increseby(150));
    dispetch(actionOne.ticketNumber(event.target.innerText));
  };

  return (
    <div className={style.three}>
      <section>
        <h1>Section C ₹150</h1>
        {Array.from({ length: 37 }, (_, number) => (
          <button
            className={SeatNum.includes(`${number + 71}`) ? style.disabled : ""}
            onClick={ticketHandlerThree}
          >
            {number + 71}
          </button>
        ))}
      </section>
    </div>
  );
};

export default BookTicketThree;
