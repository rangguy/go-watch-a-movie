import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let myMovie = {
      id: 1,
      title: "Queen of Tears",
      release_date: "2024-05-08",
      runTime: 62,
      mpaa_rating: "R",
      desciption:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo illo, accusamus neque sint dicta mollitia rerum possimus, odio officia aperiam optio cumque. Repellendus eveniet omnis et cum voluptate, animi quos?",
    };
    setMovie(myMovie);
  }, [id]);

  return (
    <div>
      <h2>Movie: {movie.title}</h2>
      <small><em>{movie.release_date}, {movie.runTime} minutes, Rated {movie.mpaa_rating}</em></small>
      <hr />
      <p>{movie.desciption}</p>
    </div>
  );
};

export default Movie;
