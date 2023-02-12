import { Link } from "react-router-dom";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.container1}>
      <div>
        <h1>
          My <span>Movie</span> Show
        </h1>
      </div>

      <nav>
        <ul>
          <aside>
            <li>
              <Link to={"/home"}>Movie List</Link>
            </li>
          </aside>
          <div>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </div>
          {/* <li>
            <Link to={"/bookticket"}>Book Ticket</Link>
          </li> */}
        </ul>
      </nav>
      {/* <div>
          <ul>
            <li>
              <Link to={"/home"}>Movie List</Link>
            </li>
          </ul>
        </div>
        <div> */}
      {/* <ul> */}
      {/* <li> */}
      {/* <Link to={"/about"}>About</Link> */}
      {/* </li> */}
      {/* </ul> */}
      {/* </div> */}
      {/* <nav>
          <ul>
            <li>
              <Link to={"/bookticket"}>Book Ticket</Link>
            </li>
            <li><Link to={"/showtotal"}>Show Total</Link></li>
          </ul>
        </nav> */}
    </div>
  );
};

export default Header;
