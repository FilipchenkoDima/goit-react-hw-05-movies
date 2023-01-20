import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'services/movie-api';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId).then(setMovieDetails);
  }, [movieId]);

  console.log(movieDetails);
  return (
    <>
      <button type="button">Go back</button>
      {movieDetails && (
        <img src={movieDetails.poster_path} alt={movieDetails.title} />
      )}
    </>
  );
};
