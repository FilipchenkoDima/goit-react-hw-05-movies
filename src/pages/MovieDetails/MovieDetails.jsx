import { NavLink, Outlet, useParams,Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'services/movie-api';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation()

  useEffect(() => {
    getMovieById(movieId).then(setMovieDetails);
  }, [movieId]);

  return (
    <>
      {movieDetails && (
        <div>
          <Link to={location.state?.from ?? '/'}>Go back</Link>
          <MovieInfo movieDetails={movieDetails} />
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      )}
    </>
  );
};
