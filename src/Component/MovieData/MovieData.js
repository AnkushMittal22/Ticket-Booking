import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import LocalMovieData from "../../LocalData/LocalMovieData";
import { actionOne } from "../../store/ticketStore";
import style from "./MovieData.module.css";

const MovieData = () => {
  const History = useHistory();
  const dispatch = useDispatch();
  const bookMoviehandler = (title) => {
    dispatch(actionOne.movieName(title));
    History.push("/bookticket");
  };

  let movieList = LocalMovieData.map((ele, ind) => {
    return (
      <div className={style.movies} key={ind}>
        <div>
          <div>
            <p className={style.postersize}>
              <img src={ele.Poster} alt="" />
            </p>

            <p>
              <span>Movie Name :</span> {ele.Title}
            </p>
            {/* <p>
              <span>Released Date :</span> {ele.Released}
            </p>
            <p>
              <span>Year : </span> {ele.Year}
            </p> */}
            <p>
              <span>Language:</span> {ele.Language}
            </p>
          </div>
          {/* <Link to={"/bookticket"}> */}
          <button onClick={() => bookMoviehandler(ele.Title)}>
            Book Ticket
          </button>
          {/* </Link> */}
        </div>
      </div>
    );
  });
  return <div className={style.movie}>{movieList}</div>;
};

export default MovieData;
