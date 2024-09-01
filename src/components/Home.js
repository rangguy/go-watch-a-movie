import { Link } from "react-router-dom";
import Ticket from "./../images/movie_tickets.jpg";

const Home = () => {
  return (
    <>
      <div className="text-center">
        <h2>Find a Movie to watch tonigh!</h2>
        <hr />
        <Link to="/movies">
          <img src={Ticket} alt="Movie Tickets" />
        </Link>
      </div>
    </>
  );
};

export default Home;
