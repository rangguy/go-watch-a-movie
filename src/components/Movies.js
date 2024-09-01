import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "Queen of Tears",
        release_date: "2024-05-08",
        runTime: 62,
        mpaa_rating: "R",
        desciption:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo illo, accusamus neque sint dicta mollitia rerum possimus, odio officia aperiam optio cumque. Repellendus eveniet omnis et cum voluptate, animi quos?",
      },
      {
        id: 2,
        title: "Love Next Door",
        release_date: "2024-08-11",
        runTime: 59,
        mpaa_rating: "R",
        desciption:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo illo, accusamus neque sint dicta mollitia rerum possimus, odio officia aperiam optio cumque. Repellendus eveniet omnis et cum voluptate, animi quos?",
      },
      {
        id: 3,
        title: "Hometown Chacha",
        release_date: "2023-11-20",
        runTime: 68,
        mpaa_rating: "PG-13",
        desciption:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo illo, accusamus neque sint dicta mollitia rerum possimus, odio officia aperiam optio cumque. Repellendus eveniet omnis et cum voluptate, animi quos?",
      },
    ];

    setMovies(moviesList);
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <hr />

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.id}>
              <td>
                <Link to={`/movies/${m.id}`}>{m.title}</Link>
              </td>
              <td>{m.release_date}</td>
              <td>{m.mpaa_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
