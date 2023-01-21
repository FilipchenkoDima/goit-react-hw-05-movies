import { getTrendingMovie } from 'services/movie-api';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
export const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation()

  useEffect(() => {
    getTrendingMovie().then(setMovies);
  }, []);

    return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({id, title}) => {
          return (
            <li key={id}>
              <NavLink state={{from: location}} to={`/movies/${id}`}>{title}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};
